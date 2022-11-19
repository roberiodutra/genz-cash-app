import { useNavigate } from 'react-router-dom';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../../utils/localStorage';

export default function NavLogin() {
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <button
          className="navbar-buttons"
          type="button"
          onClick={() => {
            removeUserFromLocalStorage();
            navigate('/sign_in');
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="navbar-buttons"
          type="button"
          onClick={() => navigate('/sign_in')}
        >
          Login
        </button>
      )}
    </div>
  );
}
