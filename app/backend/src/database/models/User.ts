import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
import Bcrypt from '../../api/helpers/Bcrypt';
import Account from './Account';

export default class User extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
}

User.init({
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
  modelName: 'users',
  timestamps: false,
});

User.addHook(
  'beforeSave',
  async (user: User): Promise<void> => {
    if (user.password) {
      user.password = await Bcrypt.hashPass(user.password);
    }
  }
);

User.belongsTo(Account);
Account.hasOne(User);
