import { createBrowserRouter } from 'react-router-dom';
import NewsDetails from '../Components/News/NewsDetails';
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
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
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default MainRoute;
