import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import Form from '../components/Form';
import { UserType } from '../../types/UserType';

export default function Login() {
  const [errLogin, setErrLogin] = useState('');
  const [loginUser, { error }] = userApi.useLoginUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (error && 'data' in error) setErrLogin(error.data.message);
  }, [error]);

  const onSubmitHandler = async (userInfo: UserType) => {
    await loginUser(userInfo)
      .unwrap()
      .then((data) => {
        console.log('🚀 ~ .then ~ data', data);
        if (data) navigate('/');
      });
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
