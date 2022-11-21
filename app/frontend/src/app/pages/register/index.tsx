import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { userApi } from '../../store/user/apiService';
import { accountApi } from '../../store/account/apiService';
import { UserType } from '../../types/UserType';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setToken } from '../../store/user/userSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { setFormError } from '../../store/userActions/actionsSlice';

export default function Register() {
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
      dispatch(setFormError(''));
      navigate('/');
    }
  }, [user]);

  const onSubmitHandler = async (userInfo: UserType) => {
    await createUser(userInfo)
      .unwrap()
      .then(async (data) => {
        if (data.id) {
          const account = await createAccount().unwrap();
          if (account.id) {
            await updateUser({
              id: data.id,
              accountId: account.id,
            });
            navigate('/');
          }
        }
      })
      .catch((error) => {
        console.log('🚀 ~ onSubmitHandler ~ error', error);
        if (error && 'data' in error)
          dispatch(setFormError(error.data.message));
      });
  };

  return (
    <main>
      <Header />
      <section className="form">
        <Form onSubmitHandler={onSubmitHandler} />

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
