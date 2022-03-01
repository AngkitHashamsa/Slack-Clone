import { Routes, Route } from "react-router-dom";
import Threads from "./Pages/Threads/Threads";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/home/Home";
import Mentions from "./Pages/mentions/Mentions";
import SingelMessage from "./Pages/SingleMessage/SingelMesage";
import Login from "./Pages/auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import * as firebase from "./firebase";
import * as actions from "./Redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import store from "./Redux/store";
import PrivateRoute from "./Pages/Private";
function App() {
  const [user, loading] = useAuthState(firebase.auth);
  const dispatch = useDispatch();
  // console.log(store.getState().loggedUser);
  useEffect(() => {
    dispatch(actions.getLoggedUser(user));
  }, [user]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="threads" element={<Threads />} />
        <Route path="mentions" element={<Mentions />} />
        <Route path="chat/:id" element={<SingelMessage />} />
      </Route>
    </Routes>
  );
}

export default App;
