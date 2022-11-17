import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserRegisterType } from '../../types/UserRegisterType';
import { registerSchema } from '../../schemas/registerSchema';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../utils/localStorage';
import { useUsers } from '../../context/providers/UserProvider';
import { useState } from 'react';
import apiService from '../../services/apiService';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Register() {
  const [errorRegister, setErrorRegister] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: UserRegisterType) => {
    apiService
      .signUP(data)
      .then(({ data }) => {
        setUser(data);
        saveUser(data);
        navigate('/');
      })
      .catch((_err) => {
        setErrorRegister('User already exists');
      });
  };

  return (
    <main>
      <Header />
      <section className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className="form-button">
              <button type="submit">Register</button>
            </div>
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
