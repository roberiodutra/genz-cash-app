import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: `${process.env.DB_NAME || 'genz_cash'}`,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = config;
