import { Model } from "sequelize";
import Models from "../../database/models";
import { ErrorTypes } from '../../helpers/ErrorCatalog';
import tokenGenerator from '../../helpers/TokenGenerator';

class BaseService {
  constructor(private model: Model) {
    this.model = model;
  }

  async create(body) {
    const userExists = await this.model.findOne({ where: { username: body.username } });
    if (userExists) throw new Error(ErrorTypes.UserExists);
    const { dataValues } = await this.model.create(body);

    const token = tokenGenerator(dataValues);
    return { ...dataValues, ...token };
  }

  async getAll() {
    const request = await this.model.findAll();
    return request;
  }

  async getOne(id) {
    const request = await this.model.findOne({
      where: { id }
    });
    return request;
  }

  async update(id, body) {
    const request = await this.model.update(body, { where: { id } });
    return request;
  }

  async delete(id) {
    await this.model.delete(id);
  }
}

export default BaseService;
