import { useNavigate, useLocation } from 'react-router-dom';

export default function NavLogin() {
  const navigate = useNavigate();

  return (
    <div>
      {/* {!user ? (
        <div>
          <button
            className="navbar-buttons"
            type="button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className="navbar-buttons"
            type="button"
            onClick={() => navigate('/sign_up')}
          >
            Contribute
          </button>
          <button
            className="navbar-buttons"
            type="button"
            onClick={() => navigate('/sign_in')}
          >
            Login
          </button>
        </div>
      ) : null} */}
    </div>
  );
}
