import { DATE, INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

export default class Transactions extends Model {
  id: number;
  value: number;
  debitedAccountId: number;
  creditedAccountId: number;
  createdAt: string;

  static associate() {
    this.belongsTo(Accounts, { foreignKey: 'debitedAccountId' });
    this.belongsTo(Accounts, { foreignKey: 'creditedAccountId' });
  }
}

Transactions.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  debitedAccountId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: Accounts,
      key: 'id'
    },
  },
  creditedAccountId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: Accounts,
      key: 'id'
    },
  },
  createdAt: {
    allowNull: false,
    type: DATE
  },
}, {
  sequelize: db,
  modelName: 'Transactions',
  tableName: 'transactions',
  timestamps: true,
  updatedAt: false,
});
