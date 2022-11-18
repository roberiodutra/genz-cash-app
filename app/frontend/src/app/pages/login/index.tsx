import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schemas/loginSchema';
import { UserLoginType } from '../../types/UserLoginType';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { saveUser, getUser } from '../../utils/localStorage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';

export default function Login() {
  const [errLogin, setErrLogin] = useState('');
  const navigate = useNavigate();
  const [loginUser, { data, error }] = userApi.useLoginUserMutation();
  const user = getUserFromLocalStorage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginType>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (user) navigate('/');
    if (error && 'data' in error) setErrLogin(error.data.message);
  }, [user, error]);

  const onSubmitHandler = (userInfo: UserLoginType) => {
    loginUser(userInfo);
    reset();
  };
  return (
    <main>
      <Header />
      <section className="form">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <fieldset>
            <legend>
              <b>Sign In</b>
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
              <div>{errLogin || errors.username?.message}</div>
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

            <button data-testid="login_button" type="submit">
              Login
            </button>
          </fieldset>
        </form>

        <p>Don't have an account?</p>

        <button type="button" onClick={() => navigate('/sign_up')}>
          Register
        </button>
      </section>
      <Footer />
    </main>
  );
}
