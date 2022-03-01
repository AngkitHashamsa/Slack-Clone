import store from "../Redux/store";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loggedUser } = store.getState().loggedUser;
  // console.log(loggedUser);
  return loggedUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
