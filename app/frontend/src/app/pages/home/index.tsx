import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TransactionCard from './TransactionCard';
import InputForTransactions from './InputForTransations';
import Balance from '../components/Balance';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import TransactionsFilter from '../components/TransactionsFilter';
import { ITransaction } from '../../store/transaction/interfaces/ITransactions';

type Filter = {
  [key: string]: ITransaction[];
};

export default function Home() {
  const { transactions } = useAppSelector((store) => store.user);
  const { filterType } = useAppSelector((store) => store.userActions);
  const [dateFilter, setDateFilter] = useState(false);

  const filteredTransactions = {
    debts: [...transactions.debitTransactions],
    credits: [...transactions.creditTransactions],
    all: [
      ...transactions.creditTransactions,
      ...transactions.debitTransactions,
    ],
  } as Filter;

  const sortByDate = () => {
    return dateFilter ? 1 : -1;
  };

  return (
    <main>
      <Header />
      <Balance />
      <InputForTransactions />
      <TransactionsFilter />
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Detail</th>
            <th>Value</th>
            <th>
              <button
                type="button"
                onClick={() => setDateFilter((prev) => !prev)}
              >
                Date
              </button>
            </th>
          </tr>
        </thead>
        {filteredTransactions[filterType]
          .sort(sortByDate)
          .map((trans, index) => (
            <TransactionCard key={index} trans={trans} />
          ))}
      </table>
      <Footer />
    </main>
  );
}
