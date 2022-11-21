import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserType } from '../../types/UserType';
import { userSchema } from '../../schemas/userSchema';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function Form({
  onSubmitHandler,
}: {
  onSubmitHandler: SubmitHandler<UserType>;
}) {
  const { isFormError } = useAppSelector((store) => store.userActions);
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
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset>
        <legend>
          <b>{path ? 'Sign In' : 'Sign Up'}</b>
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
          <div className="error-message">
            {isFormError || errors.username?.message}
          </div>
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
          <div className="error-message">{errors.password?.message}</div>
        </div>

        <button data-testid="sign_button" type="submit">
          {path ? 'Login' : 'Register'}
        </button>
      </fieldset>
    </form>
  );
}
