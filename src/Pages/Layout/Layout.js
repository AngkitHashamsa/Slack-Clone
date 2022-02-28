import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
