import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { transactionSchema } from '../../schemas/transationSchema';
import { TransactionType } from '../../types/TransactionType';

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionType>({
    resolver: yupResolver(transactionSchema),
  });

  const onSubmit = (data: TransactionType) => {
    // apiService.registerQuestion();
    reset();
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
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
