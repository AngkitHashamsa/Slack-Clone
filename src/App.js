import { Routes, Route } from "react-router-dom";
import Threads from "./Pages/Threads/Threads";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/home/Home";
import Mentions from "./Pages/mentions/Mentions";
import SingelMessage from "./Pages/SingleMessage/SingelMesage";
import Login from "./Pages/auth/Login";

//

import PrivateRoute from "./Pages/Private";
function App() {
  // console.log(user);
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
