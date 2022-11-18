import NavHome from './navButtons/NavMemberArea';
import NavLogin from './navButtons/NavLogin';
import NavMemberArea from './navButtons/NavHome';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        DevHelper
      </a>
      <div className="header-navbar">
        <NavHome />
        <NavMemberArea />
        <NavLogin />
      </div>
    </header>
  );
}
