import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';

export default class Accounts extends Model {
  id: number;
  balance: string;
}

Accounts.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Accounts',
  timestamps: false,
});
