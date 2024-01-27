// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { transactions } from '@/pages/api/data/transactions';
import { ITransactionService } from '@/interfaces/transaction.interface';
import { findInObjects } from '@/utils/findInObjects';
import dayjs from 'dayjs';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITransactionService[] | ITransactionService | null | string>,
) {
  const token = req.headers.authorization;
  if (token === process.env.TOKEN) {
    const { search, type, status, dateStart, dateEnd } = req.query;

    let resultTransactions: ITransactionService[] = transactions;
    if (type) {
      resultTransactions = resultTransactions.filter((item) => item.type === type);
    }

    if (status) {
      resultTransactions = resultTransactions.filter((item) => item.status === status);
    }

    if (dateStart) {
      resultTransactions = resultTransactions.filter(
        (item) =>
          dayjs(item.date).isSame(dayjs(dateStart as string)) ||
          dayjs(item.date).isAfter(dayjs(dateStart as string)),
      );
    }

    if (dateEnd) {
      resultTransactions = resultTransactions.filter(
        (item) =>
          dayjs(item.date).isSame(dayjs(dateEnd as string)) ||
          dayjs(item.date).isBefore(dayjs(dateEnd as string)),
      );
    }

    if (search) {
      resultTransactions = findInObjects(resultTransactions, search as string);
    }

    res.status(200).send(resultTransactions);
  } else {
    res.status(401).send('unauthorised');
  }
}
