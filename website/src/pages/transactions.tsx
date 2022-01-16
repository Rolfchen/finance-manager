import { useMemo } from 'react';
import { NextPage } from 'next';
import { Column } from 'react-table';
import { ReactTable } from 'de-fend';

interface TransactionDataType {
  date: string;
  description: string;
  amount: number;
}

const Transactions: NextPage = () => {
  const columns: Column<TransactionDataType>[] = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
    ],
    []
  );

  const data: TransactionDataType[] = useMemo(
    () => [
      {
        date: '03 Nov 2020',
        description: 'Green tea',
        amount: 5.5,
      },
      {
        date: '04 Nov 2020',
        description: 'Bubble tea',
        amount: 6,
      },
    ],
    []
  );
  return <ReactTable columns={columns} data={data} />;
};

export default Transactions;
