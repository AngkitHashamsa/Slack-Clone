import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import BorderColorIcon from "@material-ui/icons/BorderColor";
import { BsPencilSquare } from "react-icons/bs";

const Sidebar = () => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <div className="title">
          <div className="heading">
            <h4>Excellence</h4>
            <KeyboardArrowDownIcon />
          </div>
          <div className="iconss">
            <BsPencilSquare className="target-icon" />
          </div>
        </div>
      </SideBarHeader>
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.aside`
  position: fixed;
  top: 3.6rem;
  color: white;
  left: 0;
  bottom: 0;
  background-color: var(--sideBar-color);
  width: 280px;
`;
const SideBarHeader = styled.header`
  display: flex;
  margin: 0 0 0.75rem 0;
  transition: var(--transition);
  :hover {
    background-color: var(--Navbar-color);
    cursor: pointer;
  }
  .title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.875rem;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .heading {
    display: flex;
    align-items: center;
  }
  .iconss {
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .target-icon {
      z-index: 10;
      color: black;
    }
  }
`;
