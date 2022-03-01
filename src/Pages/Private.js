import store from "../Redux/store";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import * as firebase from "../firebase";
import { useEffect } from "react";
import * as actions from "../Redux/actions";
import { useDispatch } from "react-redux";
const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [user] = useAuthState(firebase.auth);
  useEffect(() => {
    if (user) {
      dispatch(actions.getLoggedUser(user?.reloadUserInfo));
    }
  }, [user]);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
