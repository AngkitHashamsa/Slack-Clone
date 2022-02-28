import React from "react";
import styled from "styled-components";
// import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <Container>
      {/* header left */}
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>
      {/* header search */}
      <HeaderSearch>
        <input type="text" />
        <SearchIcon />
      </HeaderSearch>
      {/* header right */}
      <HeaderRight></HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  background-color: var(--Navbar-color);
  color: white;
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.625rem 0.5rem;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-right: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;
const HeaderSearch = styled.div`
  display: flex;
  border-radius: 6px;
  background-color: #5d3d5e;
  padding: 0 50px;
  color: gray;
  flex: 0.4;
  position: relative;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    outline: none;
    min-width: 30vw;
    border: none;
    color: white;
  }
  > .MuiSvgIcon-root {
  }
`;
const HeaderRight = styled.div``;
// const HeaderAvatar = styled(Avatar)``;
