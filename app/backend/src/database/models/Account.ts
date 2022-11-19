import { INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';
import Transaction from './Transaction';

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
    defaultValue: 100,
  },
}, {
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

Account.hasMany(Transaction, {
  as: 'debitTransactions',
  foreignKey: 'debitedAccountId',
});

Account.hasMany(Transaction, {
  as: 'creditTransactions',
  foreignKey: 'creditedAccountId',
});

Transaction.belongsTo(Account, { foreignKey: 'debitedAccountId' });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId' });
