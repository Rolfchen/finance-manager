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
    encrypt: process.env.DB_ENCRYPTED === 'false' ? false : true,
    trustServerCertificate:
      process.env.DB_TRUSTED_CLIENT === 'true' ? true : false,
  },
  entities: ['./server/entities/*.ts'],
  migrations: ['./server/migration/*.ts'],
  cli: {
    migrationsDir: 'server/migration',
  },
};
