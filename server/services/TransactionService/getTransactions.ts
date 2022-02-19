import { getMSSqlConnection } from '../../db';
import { TransactionEntity } from '../../entities/TransactionEntity';

interface GetTransactionFilters {
  from?: string; // YYYY-MM-DD
  to?: string; // YYYY-MM-DD
  category?: string;
}

/**
 * Return an array of transactions
 * @param filters
 */
const getTransactions = async (
  filters: GetTransactionFilters
): Promise<TransactionEntity[]> => {
  const connection = await getMSSqlConnection([TransactionEntity]);
  console.log('Connection: ', connection);
  const entityManager = connection.manager;
  const transactionRepo = connection.getRepository(TransactionEntity);

  const tableAlias = 't';

  const query = transactionRepo.createQueryBuilder(tableAlias);

  // TODO - move to separate helpers
  const { from, to, category } = filters;
  if (from) {
    query.where(`${tableAlias}.date >= :from`, { from });
  }
  if (to) {
    query.where(`${tableAlias}.data <= :to`, { to });
  }
  if (category) {
    query.where(`${tableAlias}.category = :category`, { category });
  }

  return query.getMany();
};

export default getTransactions;
