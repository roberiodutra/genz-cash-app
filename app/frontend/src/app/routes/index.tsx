import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import { PrivateRoute } from './privateRoute';

function Routes() {
  const routes = useRoutes([
    {
      path: '/sign_in',
      element: <Login />,
    },
    {
      path: '/sign_up',
      element: <Register />,
    },
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return routes;
}

export default Routes;
