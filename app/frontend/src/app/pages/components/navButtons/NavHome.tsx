import { useNavigate, useLocation } from 'react-router-dom';

export default function NavHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const navOptions = { admin: '/admin', member: '/member' };
  const path = location.pathname;

  return (
    <div>
      {/* {user && (path === '/' || path.includes('question')) ? (
        <div>
          <button
            className="navbar-buttons"
            type="button"
            onClick={() => navigate(navOptions[role])}
          >
            Member Area
          </button>
        </div>
      ) : null} */}
    </div>
  );
}
