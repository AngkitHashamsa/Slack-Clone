import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h4>No</h4>
      <Outlet />
    </div>
  );
};

export default Layout;
