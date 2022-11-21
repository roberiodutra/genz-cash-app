import { useEffect, useState } from 'react';
import moment from 'moment';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { useLocation } from 'react-router-dom';
import { ITransaction } from '../../store/transaction/interfaces/ITransactions';
import { accountApi } from '../../store/account/apiService';

type ITrans = {
  trans: ITransaction;
};

export default function TransactionCard({ trans }: ITrans) {
  const [getAccountById] = accountApi.useGetAccountByIdMutation();
  const user = getUserFromLocalStorage();
  const [transactionUserName, setTransactionUserName] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (trans) {
      (async () => {
        await getAccountById(
          user.id === trans?.debitedAccountId
            ? trans?.creditedAccountId
            : trans?.debitedAccountId
        )
          .unwrap()
          .then((data) => {
            setTransactionUserName(data.user.username);
          });
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
