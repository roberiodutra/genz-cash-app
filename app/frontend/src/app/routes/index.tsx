import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/sign_in',
      element: <Login />,
    },
    {
      path: '/sign_up',
      element: <Register />,
    },
  ]);

  return routes;
}

export default Routes;
