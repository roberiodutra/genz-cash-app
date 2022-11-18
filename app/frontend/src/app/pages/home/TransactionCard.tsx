import { useEffect, useState } from 'react';
import { dataType } from '../../types/dataType';
import { removeUser } from '../../utils/localStorage';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TransactionCard({
  data: { question, status, _id, author, answer },
}: dataType) {
  const [admin, setAdmin] = useState(false);
  const [owner, setOwner] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  // useEffect(() => {
  //   if (user) {
  //     apiService.getUserById(user.id).then(({ data }) => {
  //       if (user.username !== data.username) {
  //         removeUser();
  //         setUser(null);
  //         navigate('/sign_in');
  //       }
  //       data.role === 'admin' ? setAdmin(true) : null;
  //     });

  //     apiService.getQuestionById(_id).then(({ data }) => {
  //       if (user.id === data.userId || user.role === 'admin') {
  //         setOwner(true);
  //       }
  //     });
  //   }
  // }, [user]);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <tbody>
      <tr>
        <td>ENVIADO</td>
      </tr>
    </tbody>
  );
}
