import { Navigate } from 'react-router-dom';
// Context
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
