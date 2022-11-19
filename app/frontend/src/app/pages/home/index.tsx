import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TransactionCard from './TransactionCard';
import InputForTransactions from './InputForTransations';
import Balance from '../components/Balance';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function Home() {
  return (
    <main>
      <Header />
      <Balance />
      <InputForTransactions />
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Detail</th>
            <th>Value</th>
            <th>Date</th>
          </tr>
        </thead>
        <TransactionCard />
      </table>
      <Footer />
    </main>
  );
}
