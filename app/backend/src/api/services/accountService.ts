import Users from "../../database/models/User";
import Accounts from "../../database/models/Account";

class AccountService {
  constructor(private model = Accounts) { }

  public async create() {
    const accountData = await this.model.create();
    return accountData;
  }

  public async getOne(id: string) {
    // await this.model.findOne({
    //   where: { id },
    //   include: {
    //     model: Users,
    //   }
    // }).then().catch((error) => {
    //   console.log('🚀 ~ UserService ~ login ~ error', error);
    // });
    const request = await this.model.findOne({
      where: { id },
    });
    return request;
  }

  public async update(id: string, balance: string) {
    await this.model.update({ balance }, { where: { id } });
  }
}

export default new AccountService();
