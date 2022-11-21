import { cleanup, screen } from '@testing-library/react';
import App from '../../../app/App';
import renderWithRouter from '../../utils/renderWithRouter';
import { saveUserOnLocalStorage } from '../../../app/utils/localStorage';
import { memberUser } from '../../mocks/userMock';
import server from '../../mocks/server';
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3001';
const code = { NOT_FOUND: 404 };

describe('Login page tests', () => {
  const renderApp = () =>
    renderWithRouter(<App />, {
      route: '/sign_in',
    });

  afterEach(cleanup);

  it('Check screen elements', async () => {
    renderApp();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('Check user login successfully', async () => {
    const { user, history, container } = renderApp();
    const loginButton = screen.getByTestId('sign_button');
    const userNameInput = container.querySelector('#username') as Element;
    const passwordInput = container.querySelector('#password') as Element;

    await user.type(userNameInput, memberUser.username);
    await user.type(passwordInput, memberUser.password);
    await user.click(loginButton);

    expect(history.location.pathname).toBe('/');
  });

  it('Check if logged user redirects', async () => {
    saveUserOnLocalStorage(memberUser);
    const { history } = renderApp();
    expect(history.location.pathname).toBe('/');
  });

  it('Login with wrong data trigger an error', async () => {
    server.use(
      rest.post(`${BASE_URL}/sign_in`, async (_req, res, ctx) => {
        return res.once(
          ctx.status(code.NOT_FOUND),
          ctx.json({ message: 'User not found' })
        );
      })
    );

    const { user, container } = renderApp();
    const loginButton = screen.getByTestId('sign_button');
    const userNameInput = container.querySelector('#username') as Element;
    const passwordInput = container.querySelector('#password') as Element;

    await user.type(userNameInput, 'wrong');
    await user.type(passwordInput, '123456Ge');
    await user.click(loginButton);

    expect(await screen.findByText('User not found')).toBeInTheDocument();
  });

  it('Register button redirects', async () => {
    const { user, history } = renderApp();
    const registerButton = screen.getByRole('button', { name: /register/i });

    await user.click(registerButton);
    expect(history.location.pathname).toBe('/sign_up');
  });
});
