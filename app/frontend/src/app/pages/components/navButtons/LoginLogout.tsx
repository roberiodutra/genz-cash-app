import { useNavigate } from 'react-router-dom';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../../utils/localStorage';

export default function LoginLogout() {
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
      ) : null}
    </div>
  );
}
