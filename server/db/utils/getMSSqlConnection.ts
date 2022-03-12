import {
  Connection,
  ConnectionNotFoundError,
  createConnection,
  getConnection,
} from 'typeorm';
import getSqlServerConnectionConfig from './getSqlServerConnectionConfig';

/**
 * Returns a default MSSQL connection or create a connection and return it.
 * @returns A valid SQL connection.
 */
const getMSSqlConnection = async (entities?: any[]): Promise<Connection> => {
  try {
    return getConnection();
  } catch (err) {
    // if it's a connection error, let's continue. Otherwise, throw
    if (!(err instanceof ConnectionNotFoundError)) {
      throw err;
    }
  }

  const config = {
    ...getSqlServerConnectionConfig(),
    entities,
  };
  // TODO - remove the console log later.
  console.log(config);
  const connection = await createConnection(config);
  return connection;
};

export default getMSSqlConnection;
