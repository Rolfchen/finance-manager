import { NextApiRequest, NextApiResponse } from 'next';
import { getTransactions } from 'server';

const transactionsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const response = await getTransactions(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({
      message: 'Error occurred',
      error,
    });
  }
};

export default transactionsHandler;
