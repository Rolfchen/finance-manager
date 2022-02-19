import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

/**
 * Get a TypeORM SQL connection options via environment configs
 * @returns
 */
const getSqlServerConnectionConfig = (): SqlServerConnectionOptions => {
  console.log(process.env.DB_TRUSTED_CLIENT);
  return {
    type: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    extra: {
      encrypt: process.env.DB_ENCRYPTED === 'true' ? true : false,
      trustServerCertificate:
        process.env.DB_TRUSTED_CLIENT === 'true' ? true : false,
    },
  };
};

export default getSqlServerConnectionConfig;
