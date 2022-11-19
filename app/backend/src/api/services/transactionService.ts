import { ITransaction } from "../interfaces/ITransaction";
import Transaction from "../../database/models/Transaction";

class TransactionService {
  constructor(private model = Transaction) { }


  public async create(reqbody: ITransaction) {
    const dataValues = await this.model.create({ ...reqbody });
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
