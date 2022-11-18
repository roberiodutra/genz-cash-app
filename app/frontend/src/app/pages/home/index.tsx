import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TransactionCard from './TransactionCard';
import { userApi } from '../../store/user/apiService';
import InputForTransactions from './InputForTransations';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setToken } from '../../store/user/userSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';

export default function Home() {
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();
  const questions: [] = [];

  useEffect(() => {
    if (user) {
      const { username, token } = user;
      dispatch(setToken({ username, token }));
    }
  }, [user]);

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
