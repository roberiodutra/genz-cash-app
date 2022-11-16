import { INTEGER, STRING, Model, Optional } from 'sequelize';
import db from '.';
import Bcrypt from '../../helpers/Bcrypt';
import Accounts from './Accounts';

export default class Users extends Model {
  id: number;
  username: string;
  password: string;
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
  tableName: 'users',
  timestamps: false,
});

Users.addHook(
  'beforeSave',
  async (user: Users): Promise<void> => {
    if (user.password) {
      user.password = await Bcrypt.hashPass(user.password);
    }
  }
);
