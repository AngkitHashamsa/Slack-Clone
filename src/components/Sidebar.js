import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import BorderColorIcon from "@material-ui/icons/BorderColor";
import { BsPencilSquare } from "react-icons/bs";
// import SideBarOptions from "./SideBarOptions";
import { sideBardata } from "../static/sidebarData";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  console.log(location);
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
      <SideBarOptionContainer>
        {sideBardata.map((item) => {
          return (
            <li
              className={`${location.pathname === item.path && "active"}  `}
              key={item.id}
            >
              <NavLink className="nav" to={item.path}>
                <span className="mrRight">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </SideBarOptionContainer>
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
const SideBarOptionContainer = styled.ul`
  list-style-type: none;
  .active {
    background: var(--newMessage-color);
    width: 100%;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.25rem 0;
    width: 100%;

    :hover {
      background: var(--Navbar-color);
    }

    .nav {
      display: flex;
      padding: 0.25rem 0.75rem;
      width: 100%;
      color: white;
      margin-left: 1rem;
      .mrRight {
        margin-right: 1.5rem;
      }
    }
  }
`;
