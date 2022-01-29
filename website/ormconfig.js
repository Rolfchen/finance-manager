const { config } = require('dotenv');
config(); // just use the default .env

/**
 * TypeORM Configuration file
 */

module.exports = {
  type: 'mssql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  extra: {
    encrypt: process.env.ENV === 'local' ? false : true,
    trustServerCertificate: process.env.ENV === 'local' ? true : false,
  },
  entities: ['./src/entities/*.ts'],
  migrations: ['./migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
};
