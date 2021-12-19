import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

export const sequelize = new Sequelize(
  'postgres://postgresdb:postgres123@mydatabase-instance.cyd5a8z8xoql.us-east-1.rds.amazonaws.com:5432/postgresdb1'
);

/* export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: 5432,

  dialect: 'postgres',
  storage: ':memory:',
}); */
