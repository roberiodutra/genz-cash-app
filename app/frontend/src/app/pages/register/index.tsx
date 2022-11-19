import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userApi } from '../../store/user/apiService';
import { accountApi } from '../../store/account/apiService';
import { UserType } from '../../types/UserType';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setToken } from '../../store/user/userSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';

export default function Register() {
  const [errorRegister, setErrorRegister] = useState('');
  const navigate = useNavigate();
  const [createUser, { error }] = userApi.useCreateUserMutation();
  const [updateUser] = userApi.useUpdateUserMutation();
  const [createAccount] = accountApi.useCreateAccountMutation();
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      const { username, token } = user;
      dispatch(setToken({ username, token }));
      navigate('/');
    }
    if (error && 'data' in error) setErrorRegister(error.data.message);
  }, [user]);

  const onSubmitHandler = async (userInfo: UserType) => {
    const newUser = await createUser(userInfo).unwrap();
    if (newUser.id) {
      const account = await createAccount().unwrap();
      if (account.id) {
        await updateUser({
          id: newUser.id,
          accountId: account.id,
        });
      }
    }
  };

  return (
    <main>
      <Header />
      <section className="form">
        <Form apiError={errorRegister} onSubmitHandler={onSubmitHandler} />

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
