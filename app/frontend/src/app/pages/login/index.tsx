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
  const [loginUser] = userApi.useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmitHandler = async (userInfo: UserType) => {
    await loginUser(userInfo)
      .unwrap()
      .then((data) => {
        if (data) {
          dispatch(setFormError(''));
          navigate('/');
        }
      })
      .catch((error) => {
        if (error && 'data' in error)
          dispatch(setFormError(error.data.message));
      });
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
