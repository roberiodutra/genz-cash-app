import { DATE, INTEGER, STRING, Model } from 'sequelize';
import db from '.';

export default class Transactions extends Model {
  id: number;
  username: string;
  password: string;
  accountId: string;
}

Transactions.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'Transactions',
  timestamps: false,
});
