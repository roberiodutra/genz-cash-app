import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
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

// Users.addHook(
//   'beforeSave',
//   async (user: Users): Promise<void> => {
//     if (user.password) {
//       user.password = await bcrypt.hash(user.password, 8);
//     }
//   }
// );
