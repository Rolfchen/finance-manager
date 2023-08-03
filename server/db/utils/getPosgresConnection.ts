import { TransactionEntity } from 'entities/TransactionEntity';
import { UserEntity } from 'entities/UserEntity';
import {
  Connection,
  ConnectionNotFoundError,
  createConnection,
  getConnection,
} from 'typeorm';
import getSqlServerConnectionConfig from './getSqlServerConnectionConfig';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const connectionConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

/**
 * Returns a default Postgres connection or create a connection and return it.
 * @returns A valid SQL connection.
 */
const getPostgresConnection = async (entities?: any[]): Promise<Connection> => {
  try {
    return getConnection();
  } catch (err) {
    // if it's a connection error, let's continue. Otherwise, throw
    if (!(err instanceof ConnectionNotFoundError)) {
      throw err;
    }
  }
  // Specific to this project due to entities.
  const config = {
    ...connectionConfig,
    entities: [...(entities || []), TransactionEntity, UserEntity],
  };
  // TODO - remove the console log later.
  console.log(config);
  const connection = await createConnection(config);
  return connection;
};

export default getPostgresConnection;
