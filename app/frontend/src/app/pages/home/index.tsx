import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TransactionCard from './TransactionCard';
import { userApi } from '../../store/user/apiService';
import InputForTransactions from './InputForTransations';

export default function Home() {
  const questions: [] = [];
  return (
    <main>
      <Header />
      <InputForTransactions />
      <table className="questions-table">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
            <th>Author</th>
          </tr>
        </thead>
        {questions?.map((Q, I) => (
          <TransactionCard key={I} data={Q} />
        ))}
      </table>
      <Footer />
    </main>
  );
}
