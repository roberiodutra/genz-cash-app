import Account from "../../database/models/Account";

class AccountService {
  constructor(private model = Account) { }

  public async create() {
    const accountData = await this.model.create();
    return accountData;
  }

  public async getOne(id: string) {
    const request = await this.model.findOne({
      where: { id },
      include: { all: true },
    });
    return request;
  }

  public async update(id: string, balance: number) {
    await this.model.update({ balance }, { where: { id } });
  }
}

export default new AccountService();
