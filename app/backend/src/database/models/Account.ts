import { INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';
import Transactions from './Transaction';

export default class Account extends Model {
  declare id: number;
  declare balance: string;
}

Account.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 100.00,
  },
}, {
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

Account.hasMany(Transactions);
Transactions.belongsTo(Account);
Transactions.belongsTo(Account);
