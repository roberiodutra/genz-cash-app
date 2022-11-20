import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import Form from '../components/Form';
import { UserType } from '../../types/UserType';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setFormError } from '../../store/userActions/actionsSlice';

export default function Login() {
  const [loginUser, { error }] = userApi.useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error && 'data' in error) dispatch(setFormError(error.data.message));
  }, [error]);

  const onSubmitHandler = async (userInfo: UserType) => {
    const isUser = await loginUser(userInfo);
    if (isUser) navigate('/');
  };

  return (
    <main>
      <Header />
      <section className="form">
        <Form onSubmitHandler={onSubmitHandler} />

        <p>Don't have an account?</p>

        <button type="button" onClick={() => navigate('/sign_up')}>
          Register
        </button>
      </section>
      <Footer />
    </main>
  );
}
