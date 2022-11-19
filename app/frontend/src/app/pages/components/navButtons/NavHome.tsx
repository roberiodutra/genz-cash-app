import { useNavigate, useLocation } from 'react-router-dom';

export default function NavHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const navOptions = { admin: '/admin', member: '/member' };
  const path = location.pathname;

  return (
    <div>
      <button>Send Money</button>
    </div>
  );
}
