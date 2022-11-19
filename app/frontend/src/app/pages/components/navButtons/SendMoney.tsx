import { useNavigate, useLocation } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../../utils/localStorage';

export default function SendMoney() {
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return <div>{path === '/' ? <button>Send Money</button> : null}</div>;
}
