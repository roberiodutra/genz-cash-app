import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function UserInfo() {
  const { balance, username } = useAppSelector((store) => store.user);
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
              <h2>{balance}</h2>
              <button type="button">show</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
