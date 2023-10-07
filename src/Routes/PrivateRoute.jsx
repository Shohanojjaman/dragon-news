import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContextProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex w-full justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
