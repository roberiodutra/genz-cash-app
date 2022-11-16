import { Sequelize } from 'sequelize-typescript';
import * as config from '../config/database';
import Users from './Users';

// Users.sync();

export default new Sequelize(config);
