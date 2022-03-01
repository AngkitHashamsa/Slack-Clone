import store from "../Redux/store";
import { Navigate } from "react-router-dom";

import { useDispatch } from "react-redux";
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
