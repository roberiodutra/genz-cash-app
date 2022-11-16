import { Sequelize } from 'sequelize-typescript';
import * as config from '../config/database';

export default new Sequelize(config);
