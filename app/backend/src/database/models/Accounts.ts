import { INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';
import Transactions from './Transactions';
import Users from './Users';

export default class Accounts extends Model {
  id: number;
  balance: string;

  static associate() {
    this.hasOne(Users);
    this.hasMany(Transactions);
  }
}

Accounts.init({
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
  modelName: 'Accounts',
  tableName: 'accounts',
  timestamps: false,
});
