import { cleanup, screen } from '@testing-library/react';
import App from '../../../app/App';
import renderWithRouter from '../../utils/renderWithRouter';
import { memberUser } from '../../mocks/userMock';
import server from '../../mocks/server';
import { rest } from 'msw';
import { UserType } from '../../../app/types/UserType';

const BASE_URL = 'http://localhost:3001';
const code = { CONFLICT: 409 };

describe('Register page tests', () => {
  const renderApp = () =>
    renderWithRouter(<App />, {
      route: '/sign_up',
    });

  afterEach(cleanup);

  it('Check screen elements', async () => {
    renderApp();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('Check account created successfully', async () => {
    const { user, history, container } = renderApp();
    const registerButton = screen.getByText('Register');
    const userNameInput = container.querySelector('#username') as Element;
    const passwordInput = container.querySelector('#password') as Element;

    await user.type(userNameInput, 'NewUser');
    await user.type(passwordInput, memberUser.password);

    await user.click(registerButton);
    expect(history.location.pathname).toBe('/');
  });

  it('Check if buttons redirects', async () => {
    const { user, history } = renderApp();
    expect(screen.getByText('Have an account?')).toBeInTheDocument();
    const loginButton = screen.getByText('Sign In');
    await user.click(loginButton);
    expect(history.location.pathname).toBe('/sign_in');
  });

  it('Register with existing user returns error', async () => {
    server.use(
      rest.post(`${BASE_URL}/sign_up`, async (_req, res, ctx) => {
        return res.once(
          ctx.status(code.CONFLICT),
          ctx.json({ message: 'User already exists' })
        );
      })
    );
    const { user, container } = renderApp();
    const registerButton = screen.getByTestId('sign_button');
    const userNameInput = container.querySelector('#username') as Element;
    const passwordInput = container.querySelector('#password') as Element;

    await user.type(userNameInput, memberUser.username);
    await user.type(passwordInput, memberUser.password);

    await user.click(registerButton);

    expect(await screen.findByText('User already exists')).toBeInTheDocument();
  });

  it('Register with wrong data format', async () => {
    const { user, container } = renderApp();
    const registerButton = screen.getByTestId('sign_button');
    const userNameInput = container.querySelector('#username') as Element;
    const passwordInput = container.querySelector('#password') as Element;

    const dataTester = async (data: UserType) => {
      await user.type(userNameInput, data.username);
      await user.type(passwordInput, data.password);
      await user.click(registerButton);
    };

    const clearInputs = async () => {
      await user.clear(userNameInput);
      await user.clear(passwordInput);
    };

    const newUser = {
      username: 'Tester',
      password: memberUser.password,
    };

    await dataTester({ ...newUser, username: 'er' });
    expect(
      await screen.findByText('Username must be at least 3 characters')
    ).toBeInTheDocument();

    await clearInputs();
    await dataTester({ ...newUser, password: '1234' });
    expect(
      await screen.findByText('Password must be at least 8 characters')
    ).toBeInTheDocument();
  });
});
