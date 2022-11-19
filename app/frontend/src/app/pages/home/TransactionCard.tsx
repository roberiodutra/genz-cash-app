import { useEffect, useState } from 'react';
import moment from 'moment';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';
import { useNavigate, useLocation } from 'react-router-dom';
import { ITransaction } from '../../store/transaction/interfaces/ITransactions';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function TransactionCard() {
  const { transactions } = useAppSelector((store) => store.user);
  const user = getUserFromLocalStorage();
  console.log('🚀 ~ TransactionCard ~ transactions', transactions);
  const [admin, setAdmin] = useState(false);
  const [owner, setOwner] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <tbody>
      {[
        ...transactions.creditTransactions,
        ...transactions.debitTransactions,
      ].map((trans, index) => (
        <tr key={index}>
          <td>
            {trans.creditedAccountId === user.id
              ? `received from @${trans.debitedAccountId}`
              : `sent to @${trans.creditedAccountId}`}
          </td>
          <td>{`$${Number(trans.value).toFixed(2)}`}</td>
          <td>{moment(trans.createdAt).format('MMM Do YY')}</td>
        </tr>
      ))}
    </tbody>
  );
}
