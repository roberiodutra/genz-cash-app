import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { userApi } from '../../store/user/apiService';
import { accountApi } from '../../store/account/apiService';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { setToken } from '../../store/user/userSlice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import Form from '../components/Form';
import { UserType } from '../../types/UserType';

export default function Register() {
  const [errorRegister, setErrorRegister] = useState('');
  const navigate = useNavigate();
  const [createUser] = userApi.useCreateUserMutation();
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
  }, [user]);

  const onSubmitHandler = async (userInfo: UserType) => {
    try {
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
    } catch (_e) {
      setErrorRegister('User Already Exists');
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
