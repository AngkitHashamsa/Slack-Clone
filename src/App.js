import { Routes, Route } from "react-router-dom";
import Threads from "./Pages/Threads/Threads";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/home/Home";
import Mentions from "./Pages/mentions/Mentions";
import SingelMessage from "./Pages/SingleMessage/SingelMesage";
import Login from "./Pages/auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import * as firebase from "./firebase";

import PrivateRoute from "./Pages/Private";
import styled from "styled-components";
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(firebase.auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src={"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"}
            alt="logo"
          />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

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
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
  display: flex;
  padding-bottom: 100px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
