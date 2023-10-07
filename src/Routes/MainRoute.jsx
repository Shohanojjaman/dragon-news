import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import PrivateRoute from './PrivateRoute';

const MainRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <>About</>,
      },
      {
        path: '/career',
        element: <>Career</>,
      },
      {
        path: '/news/:id',
        element: <PrivateRoute> </PrivateRoute>,
      },
    ],
  },
]);

export default MainRoute;
