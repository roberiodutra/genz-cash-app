import { cleanup, screen } from '@testing-library/react';
import App from '../../../app/App';
import renderWithRouter from '../../utils/renderWithRouter';
import { saveUserOnLocalStorage } from '../../../app/utils/localStorage';
import { memberUser } from '../../mocks/userMock';
import accountMock from '../../mocks/accountMock';

describe('Home tests', () => {
  const renderApp = (route: string) => renderWithRouter(<App />, { route });

  afterEach(cleanup);

  it('Home navbar elements exists', async () => {
    saveUserOnLocalStorage(memberUser);
    renderApp('/');
    const sendMoney = await screen.findByRole('button', {
      name: /send money/i,
    });
    const logout = await screen.findByRole('button', { name: /logout/i });
    const logo = await screen.findByText('GenZ Cash');
    expect(sendMoney).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });

  it('Check header navbar buttons', async () => {
    saveUserOnLocalStorage(memberUser);
    const { user, history, container } = renderApp('/');
    const sendMoney = await screen.findByRole('button', {
      name: /send money/i,
    });
    const logout = await screen.findByRole('button', { name: /logout/i });

    await user.click(sendMoney);

    expect(container.querySelector('#receiver')).toBeInTheDocument();
    expect(container.querySelector('#value')).toBeInTheDocument();

    const buttonCloseForm = container.querySelector(
      'button-close-form'
    ) as Element;
    await user.click(buttonCloseForm);

    expect(logout).toBeInTheDocument();
    await user.click(logout);
    expect(history.location.pathname).toBe('/sign_in');
  });

  it('Check user info section', async () => {
    saveUserOnLocalStorage(memberUser);
    const { container } = renderApp('/');
    const thead = container.querySelector('thead') as Element;
    const tbody = container.querySelector('tbody') as Element;
    const userRow = thead.querySelectorAll('tr th');
    const balanceColumn = tbody.querySelectorAll('tr td');

    const tableHead = [];
    for (const value of userRow.values()) {
      tableHead.push(value.innerHTML);
    }

    const tablebody = [];
    for (const value of balanceColumn.values()) {
      tablebody.push(value.querySelector('h2')?.textContent);
    }

    expect(tableHead).toEqual(['user', 'balance']);
    expect(tablebody).toEqual([
      `@${memberUser.username}`,
      `$${memberUser.account.balance}`,
    ]);
  });

  it('Check transactions table section', async () => {
    saveUserOnLocalStorage(memberUser);
    const { container } = renderApp('/');
    const thead = container.querySelectorAll('thead')[1] as Element;
    const tbody = container.querySelectorAll('tbody')[1] as Element;
    const rows = thead.querySelectorAll('tr th');
    const columns = tbody.querySelectorAll('tr td');

    const tableHead = [];
    for (const value of rows.values()) {
      tableHead.push(value.innerHTML);
    }

    const tablebody = [];
    for (const value of columns.values()) {
      tablebody.push(value.innerHTML);
    }

    expect(tableHead).toEqual([
      'Detail',
      'Value',
      '<button type="button">Date 🔃</button>',
    ]);

    expect(tablebody).toEqual([
      'received from @',
      `$${accountMock.creditTransactions[0].value}`,
      'Nov 20th 22',
    ]);
  });
});
