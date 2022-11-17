import { ITransaction } from "../interfaces/ITransaction";
import Transactions from "../database/models/Transactions";

class TransactionService {
  constructor(private model = Transactions) { }


  public async create(reqbody: ITransaction) {
    await this.model.create({ ...reqbody }).then().catch((err) => {
      console.log('🚀 ~ TransactionService ~ create ~ err', err);
    });
    const { dataValues } = await this.model.create({ ...reqbody });
    return dataValues;
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

  public async update(id: string, balance: string) {
    await this.model.update({ balance }, { where: { id } });
  }
}

export default new TransactionService();
