import { useLocation } from 'react-router-dom';
import { setHideInputForm } from '../../../store/userActions/actionsSlice';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';

export default function SendMoney() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      {path === '/' ? (
        <button type="button" onClick={() => dispatch(setHideInputForm())}>
          Send Money
        </button>
      ) : null}
    </div>
  );
}
