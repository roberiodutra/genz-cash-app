import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
import Bcrypt from '../../helpers/Bcrypt';
import Accounts from './Accounts';

export default class Users extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare accountId: number;

  static associate() {
    this.belongsTo(Accounts, { foreignKey: 'accountId' });
  }
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
  accountId: {
    type: INTEGER,
    references: {
      model: Accounts,
      key: 'id'
    },
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
