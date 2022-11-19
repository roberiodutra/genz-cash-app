import Users from "../../database/models/User";
import { IRead } from "../interfaces/IRead";
import { IUser } from "../interfaces/IUser";
import { IWrite } from "../interfaces/IWrite";
import { ErrorTypes } from "../helpers/ErrorCatalog";
import Bcrypt from "../helpers/Bcrypt";
import tokenGenerator from "../helpers/TokenGenerator";
import { UserSchema } from "../types/userType";
import Account from "../../database/models/Account";

class UserService implements IRead<IUser>, IWrite<IUser> {
  constructor(private model = Users) { }

  public async login(username: string, password: string) {
    const userInfo = await this.model.findOne({
      where: { username },
      include: {
        model: Account,
        attributes: ['balance'],
      },
    });
    if (!userInfo) throw new Error(ErrorTypes.UserNotFound);

    const checkPassword = await Bcrypt.comparePass(password, userInfo.password);
    if (!checkPassword) throw new Error(ErrorTypes.WrongPassword);

    const token = tokenGenerator({ ...userInfo.dataValues, password });

    return { ...userInfo.dataValues, ...token };
  }

  public async create(
    username: string,
    password: string,
  ) {
    const parsed = UserSchema.safeParse({ username, password });
    if (!parsed.success) throw parsed.error;

    const userExists = await this.model.findOne({ where: { username } });
    if (userExists) throw new Error(ErrorTypes.UserExists);


    const userInfo = await this.model.create({ username, password });

    const token = tokenGenerator({ ...userInfo.dataValues, password });
    return { ...userInfo.dataValues, ...token };
  }

  public async getAll() {
    const request = await this.model.findAll();
    return request;
  }

  public async getOne(idOrName: string) {
    const request = await this.model.findOne({
      where: { [Number.isInteger(+idOrName) ? 'id' : 'username']: idOrName },
      include: {
        model: Account,
        attributes: ['balance'],
      },
    });
    return request;
  }

  public async update(id: string, body: IUser) {
    await this.model.update(body, { where: { id } });
  }

  public async delete(id: string) {
    await this.model.destroy({ where: { id } });
  }
}

export default new UserService();
