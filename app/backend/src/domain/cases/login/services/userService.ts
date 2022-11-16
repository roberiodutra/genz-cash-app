import Users from "../../../../database/models/Users";
import { IRead } from "../../../../domain/interfaces/IRead";
import { IUser } from "../../../../domain/interfaces/IUser";
import { IWrite } from "../../../../domain/interfaces/IWrite";
import { ErrorTypes } from "../../../../helpers/ErrorCatalog";
import tokenGenerator from "../../../../helpers/TokenGenerator";

class UserService implements IRead<IUser>, IWrite<IUser> {
  constructor(private model = Users) { }

  async create(body: IUser) {
    const userExists = await this.model.findOne({ where: { username: body.username } });
    if (userExists) throw new Error(ErrorTypes.UserExists);
    const { dataValues } = await this.model.create({ ...body });

    const token = tokenGenerator(dataValues);
    return { ...dataValues, ...token };
  }

  async getAll() {
    const request = await this.model.findAll();
    return request;
  }

  async getOne(id: string) {
    const request = await this.model.findOne({
      where: { id }
    });
    return request;
  }

  async update(id: string, body: IUser) {
    await this.model.update(body, { where: { id } });
  }

  async delete(id: string) {
    const request = await this.model.findOne({ where: { id } });
    if (request) request.destroy();
    return ({ status: 'Deleted Sucessfully' });
  }
}

export default new UserService();
