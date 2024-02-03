
import useAuth from '../../redux/auth/authSelectors'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component, 
  redirectTo ='/login'}) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
};

//OK