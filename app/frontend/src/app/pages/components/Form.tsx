import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserType } from '../../types/UserType';
import { userSchema } from '../../schemas/userSchema';
import { useLocation } from 'react-router-dom';

export default function Form({
  apiError,
  onSubmitHandler,
}: {
  apiError: string;
  onSubmitHandler: SubmitHandler<UserType>;
}) {
  const location = useLocation();
  const path = location.pathname === '/sign_in';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: yupResolver(userSchema),
  });

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <legend>
            <b>Sign Up</b>
          </legend>

          <div className="form-box">
            <input
              className="form-input"
              id="username"
              type="text"
              {...register('username')}
              required
            />
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div>{apiError || errors.username?.message}</div>
          </div>

          <div className="form-box">
            <input
              className="form-input"
              id="password"
              type="password"
              {...register('password')}
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div>{errors.password?.message}</div>
          </div>

          <button type="submit">{path ? 'Login' : 'Register'}</button>
        </fieldset>
      </form>
    </section>
  );
}
