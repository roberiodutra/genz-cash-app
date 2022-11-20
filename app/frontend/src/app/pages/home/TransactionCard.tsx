import { useEffect, useState } from 'react';
import moment from 'moment';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { useNavigate, useLocation } from 'react-router-dom';
import { ITransaction } from '../../store/transaction/interfaces/ITransactions';
import { accountApi } from '../../store/account/apiService';

type ITrans = {
  trans: ITransaction;
};

export default function TransactionCard({ trans }: ITrans) {
  const [getAccountById] = accountApi.useGetAccountByIdMutation();
  const user = getUserFromLocalStorage();
  const [transactionUserName, setTransactionUserName] = useState('');
  const [owner, setOwner] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (trans) {
      (async () => {
        const uname = await getAccountById(
          user.id === trans?.debitedAccountId
            ? trans?.creditedAccountId
            : trans?.debitedAccountId
        ).unwrap();
        setTransactionUserName(uname.user.username);
      })();
    }
  }, [trans]);

  return (
    <tbody>
      <tr>
        <td>
          {trans.creditedAccountId === user.id
            ? `received from @${transactionUserName}`
            : `sent to @${transactionUserName}`}
        </td>
        <td>{`$${Number(trans.value).toFixed(2)}`}</td>
        <td>{moment(trans.createdAt).format('MMM Do YY')}</td>
      </tr>
    </tbody>
  );
}
