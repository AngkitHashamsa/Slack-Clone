import { Routes, Route } from "react-router-dom";
import Threads from "./Pages/Threads/Threads";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="threads" element={<Threads />} />
      </Route>
    </Routes>
  );
}

export default App;
