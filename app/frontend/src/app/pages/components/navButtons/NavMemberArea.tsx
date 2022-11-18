import { useNavigate, useLocation } from 'react-router-dom';
import { removeUser } from '../../../utils/localStorage';

export default function NavMemberArea() {
  const navigate = useNavigate();
  const location = useLocation();
  const navOptions = { admin: '/admin', member: '/member' };
  const path = location.pathname;
  const navMember = { add: 'addQuestion', own: 'myQuestions' };

  return (
    <div>
      {/* {path === navOptions[role] ? (
        <div>
          <button
            className="navbar-buttons"
            type="button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          {memberPage === navMember.add ? (
            <button
              className="navbar-buttons"
              type="button"
              onClick={() => setMemberPage(navMember.own)}
            >
              {titleByUserRole}
            </button>
          ) : null}
          {memberPage === navMember.own ? (
            <button
              className="navbar-buttons"
              type="button"
              onClick={() => setMemberPage(navMember.add)}
            >
              Add a Question
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => {
              removeUser();
              setUser(null);
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      ) : null} */}
    </div>
  );
}
