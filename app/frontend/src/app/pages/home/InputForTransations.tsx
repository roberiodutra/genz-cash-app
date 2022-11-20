import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { transactionSchema } from '../../schemas/transationSchema';
import { TransactionType } from '../../types/TransactionType';
import { transactionApi } from '../../store/transaction/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { userApi } from '../../store/user/apiService';
import { accountApi } from '../../store/account/apiService';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setFormError, setRefresh } from '../../store/userActions/actionsSlice';

export default function InputForTransactions() {
  const [createTransaction] = transactionApi.useCreateTransactionMutation();
  const [updateAccount] = accountApi.useUpdateAccountMutation();
  const [getUserByIdOrName] = userApi.useGetUserByIdOrNameMutation();
  const { hideInputForm, isFormError } = useAppSelector(
    (store) => store.userActions
  );
  const user = getUserFromLocalStorage();
  const { balance } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionType>({
    resolver: yupResolver(transactionSchema),
  });

  const onSubmitHandler = async (data: TransactionType) => {
    if (data.receiver === user.username) {
      return dispatch(setFormError('Cannot send to yourself'));
    }

    const receiver = await getUserByIdOrName(data.receiver).unwrap();
    if (!receiver) dispatch(setFormError('User Not Found'));

    if (receiver?.id) {
      await createTransaction({
        value: data.value,
        debitedAccountId: user.id,
        creditedAccountId: receiver.id,
      });

      await updateAccount({
        id: receiver.accountId,
        balance: Number(receiver.account.balance) + Number(data.value),
      });

      await updateAccount({
        id: user.id,
        balance: Number(balance) - Number(data.value),
      });
      dispatch(setRefresh());
      reset();
    }
  };

  return (
    <section className={hideInputForm ? 'form' : ''}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <legend>
            <b>Send Money</b>
          </legend>
          <div className="form-box">
            <input
              className="form-input"
              id="receiver"
              type="text"
              {...register('receiver')}
              required
            />
            <label htmlFor="receiver" className="form-label">
              Receiver
            </label>
            <div>{isFormError || errors.receiver?.message}</div>
          </div>
          <div className="form-box">
            <input
              className="form-input"
              id="value"
              type="number"
              max={balance}
              {...register('value')}
              required
            />
            <label htmlFor="value" className="form-label">
              Value
            </label>
            <div>{errors.value?.message}</div>
          </div>
          <button type="submit">Send</button>
        </fieldset>
      </form>
    </section>
  );
}
