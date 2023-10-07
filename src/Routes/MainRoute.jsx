import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import PrivateRoute from './PrivateRoute';
import NewsDetails from '../Components/News/NewsDetails';

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
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <>Log in</>,
      },
      {
        path: '/register',
        element: <> register</>,
      },
    ],
  },
]);

export default MainRoute;
