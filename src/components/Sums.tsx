import React, { FC, useEffect, useState } from 'react';
import { ITransaction } from '@/interfaces/transaction.interface';
import { TransactionTypeEnum } from '@/enums/transactionType.enum';

interface ISumsSummaryProps {
  transactionsList: ITransaction[];
}

const SumsSummary: FC<ISumsSummaryProps> = ({ transactionsList }) => {
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    calculateSums(transactionsList);
  }, [transactionsList]);

  const calculateSums = (list: ITransaction[]) => {
    let totalIncomeValue = 0;
    let totalExpenseValue = 0;

    list.forEach((item) => {
      if (item.type === ('income' as TransactionTypeEnum)) {
        totalIncomeValue += item.amount;
      } else if (item.type === ('expense' as TransactionTypeEnum)) {
        totalExpenseValue += item.amount;
      }
    });

    setTotalIncome(totalIncomeValue);
    setTotalExpense(-totalExpenseValue);
    setBalance(totalIncomeValue + totalExpenseValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px auto',
      }}
    >
      <h3>Total Income: {totalIncome}$</h3>
      <h3>Total Expense: {totalExpense}$</h3>
      <h3>Balance: {balance}$</h3>
    </div>
  );
};

export default SumsSummary;
