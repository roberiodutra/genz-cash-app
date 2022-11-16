import Users from "../database/models/Users";
import { IRead } from "../interfaces/IRead";
import { IUser } from "../interfaces/IUser";
import { IWrite } from "../interfaces/IWrite";
import { ErrorTypes } from "../helpers/ErrorCatalog";
import tokenGenerator from "../helpers/TokenGenerator";

class UserService implements IRead<IUser>, IWrite<IUser> {
  constructor(private model = Users) { }

  public async login(username: string, password: string) {
    const user = await this.model.findOne({ where: { username } });
    const userInfo = {
      id: user?.id,
      username,
      password,
    };
    const { token } = tokenGenerator(userInfo);

    return ({ ...userInfo, token });
  }

  public async create(username: string, password: string) {
    const userExists = await this.model.findOne({ where: { username } });
    if (userExists) throw new Error(ErrorTypes.UserExists);
    const { dataValues } = await this.model.create({ username, password });

    const token = tokenGenerator(dataValues);
    return { ...dataValues, ...token };
  }

  public async getAll() {
    const request = await this.model.findAll();
    return request;
  }

  public async getOne(id: string) {
    const request = await this.model.findOne({
      where: { id }
    });
    return request;
  }

  public async update(id: string, body: IUser) {
    await this.model.update(body, { where: { id } });
  }

  public async delete(id: string) {
    const request = await this.model.findOne({ where: { id } });
    if (request) request.destroy();
    return ({ status: 'Deleted Sucessfully' });
  }
}

export default new UserService();
