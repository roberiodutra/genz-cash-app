import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setToken } from '../../store/user/userSlice';
import Form from '../components/Form';
import { UserType } from '../../types/UserType';

export default function Login() {
  const [errLogin, setErrLogin] = useState('');
  const [loginUser, { error }] = userApi.useLoginUserMutation();
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      const { username, token } = user;
      dispatch(setToken({ username, token }));
      navigate('/');
    }
    if (error && 'data' in error) setErrLogin(error.data.message);
  }, [user]);

  const onSubmitHandler = async (userInfo: UserType) => {
    await loginUser(userInfo);
  };

  return (
    <main>
      <Header />
      <section className="form">
        <Form apiError={errLogin} onSubmitHandler={onSubmitHandler} />

        <p>Don't have an account?</p>

        <button type="button" onClick={() => navigate('/sign_up')}>
          Register
        </button>
      </section>
      <Footer />
    </main>
  );
}
