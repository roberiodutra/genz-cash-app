import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
import Users from './Users';

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
  tableName: 'accounts',
  timestamps: false,
});

// Accounts.belongsTo(Users, {
//   constraints: true,
//   foreignKey: 'accountId'
// });
