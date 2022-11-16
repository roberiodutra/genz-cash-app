import Accounts from "../database/models/Accounts";

class AccountService {
  constructor(private model = Accounts) { }

  public async create() {
    const { dataValues } = await this.model.create();
    return dataValues;
  }

  public async getOne(id: string) {
    const request = await this.model.findOne({
      where: { id }
    });
    return request;
  }

  public async update(id: string, balance: string) {
    await this.model.update({ balance }, { where: { id } });
  }
}

export default new AccountService();
