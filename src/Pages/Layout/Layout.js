import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Container>
    </div>
  );
};

export default Layout;

const Container = styled.div`
  /* display: flex; */
  margin-top: 5rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 280px 4fr;
`;
const MainContainer = styled.main`
  padding: 0 0 2rem 0;
  /* border: 2px red solid; */

  height: 100vh;
`;
