import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { transactionSchema } from '../../schemas/transationSchema';
import { TransactionType } from '../../types/TransactionType';
import { transactionApi } from '../../store/transaction/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { userApi } from '../../store/user/apiService';

export default function InputForTransactions() {
  const [createTransaction] = transactionApi.useCreateTransactionMutation();
  const user = getUserFromLocalStorage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionType>({
    resolver: yupResolver(transactionSchema),
  });

  // const onSubmitHandler = async (data: TransactionType) => {
  //   const pack = {
  //     value: data.value,
  //     debitedAccountId: user.username,
  //     creditedAccountId: data.receiver
  //   };
  //   await createTransaction()
  //     .unwrap()
  //     .then()
  //     .catch((error) => {});
  //   reset();
  // };

  return (
    <section className="form">
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
            <div>{errors.receiver?.message}</div>
          </div>
          <div className="form-box">
            <input
              className="form-input"
              id="value"
              type="text"
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
