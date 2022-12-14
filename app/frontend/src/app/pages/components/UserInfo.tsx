import { useState } from 'react';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function UserInfo() {
  const { balance, username } = useAppSelector((store) => store.user);
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <table className="userInfo">
      <thead>
        <tr>
          <th>user</th>
          <th>balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="username">
              <h2>{`@${username}`}</h2>
            </div>
          </td>
          <td>
            <div className="balance">
              <h2>
                {hideBalance
                  ? '*'.repeat(String(balance).length)
                  : `$${balance.toFixed(2)}`}
              </h2>
              <button
                type="button"
                onClick={() => setHideBalance((prev) => !prev)}
              >
                <span>
                  <i
                    className={hideBalance ? 'fa fa-eye-slash' : 'fa fa-eye'}
                    style={{ color: 'Teal' }}
                  ></i>
                </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
