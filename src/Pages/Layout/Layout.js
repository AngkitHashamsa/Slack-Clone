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
  display: grid;
  grid-template-columns: 280px 4fr;
`;
const MainContainer = styled.main`
  margin-top: 4rem;
  padding: 0 0 2rem 0;
  /* border: 2px red solid; */
  overflow-y: auto;
  height: 100vh;
`;
