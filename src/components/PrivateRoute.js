import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
export const ROLE = {
    Admin :'Admin',
    User :'User',
  }
const PrivateRoute = ({
  children,
  roles,
}) => {
  let location = useLocation();
  const { loggedIn, userData } = useSelector(state => state.auth);

  const userHasRequiredRole = userData && roles.includes(userData.role) ? true : false;

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (loggedIn && !userHasRequiredRole) {
    return <div>Access Denied</div>; // build your won access denied page (sth like 404)
  }

  return children;
};

export default PrivateRoute;