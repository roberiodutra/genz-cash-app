import { DATE, INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';

export default class Transactions extends Model {
  declare id: number;
  declare value: number;
  declare createdAt: string;
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
  createdAt: {
    allowNull: false,
    type: DATE
  },
}, {
  sequelize: db,
  modelName: 'transactions',
  timestamps: true,
  updatedAt: false,
});
