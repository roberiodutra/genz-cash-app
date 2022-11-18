import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserRegisterType } from '../../types/UserRegisterType';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import { accountApi } from '../../store/account/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { userSchema } from '../../schemas/userSchema';
import { setToken } from '../../store/user/userSlice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';

export default function Register() {
  const [errorRegister, setErrorRegister] = useState('');
  const navigate = useNavigate();
  const [createUser] = userApi.useCreateUserMutation();
  const [updateUser] = userApi.useUpdateUserMutation();
  const [createAccount] = accountApi.useCreateAccountMutation();
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    if (user) {
      dispatch(setToken(user.token));
      navigate('/');
    }
  }, [user]);

  const onSubmitHandler = async (userInfo: UserRegisterType) => {
    try {
      const createdUser = await createUser(userInfo).unwrap();
      const account = await createAccount().unwrap();
      if (account.id) {
        await updateUser({
          id: createdUser.id,
          accountId: account.id,
        });
      }
      reset();
    } catch (_e) {
      setErrorRegister('User Already Exists');
    }
  };

  return (
    <main>
      <Header />
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
              <div>{errorRegister || errors.username?.message}</div>
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

            <button type="submit">Register</button>
          </fieldset>
        </form>

        <p>Have an account?</p>

        <button
          className="sign-button"
          type="button"
          onClick={() => navigate('/sign_in')}
        >
          Sign In
        </button>
      </section>
      <Footer />
    </main>
  );
}
