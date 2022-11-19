import LoginLogout from './navButtons/LoginLogout';
import SendMoney from './navButtons/SendMoney';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        Genz Cash
      </a>
      <div className="header-navbar">
        <SendMoney />
        <LoginLogout />
      </div>
    </header>
  );
}
