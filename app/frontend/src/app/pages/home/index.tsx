import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TransactionCard from './TransactionCard';
import InputForTransactions from './InputForTransations';
import UserInfo from '../components/UserInfo';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import TransactionsFilter from '../components/TransactionsFilter';
import { ITransaction } from '../../store/transaction/interfaces/ITransactions';

type FilterType = {
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
  } as FilterType;

  const sortByDate = (a: ITransaction, b: ITransaction) => {
    if (a.createdAt && b.createdAt) {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return !dateFilter ? (dateA < dateB ? 1 : -1) : dateA > dateB ? 1 : -1;
    }
    return 1;
  };

  return (
    <main>
      <Header />
      <UserInfo />
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
