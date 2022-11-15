import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

export default class Users extends Model {
  id: number;
  username: string;
  password: string;
  accountId: string;
}

Users.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Users',
  timestamps: false,
});

Users.hasOne(Accounts, { foreignKey: 'accountId' });