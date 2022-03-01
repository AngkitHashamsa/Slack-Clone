import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import BorderColorIcon from "@material-ui/icons/BorderColor";
import { BsPencilSquare } from "react-icons/bs";
// import SideBarOptions from "./SideBarOptions";
import { sideBardata } from "../static/sidebarData";
import { NavLink } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useLocation } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import * as firebase from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import * as actions from "../Redux/actions";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname.split("").slice(1).join(""));
  // let newPath = location.pathname.split("").slice(1).join();
  const dispatch = useDispatch();
  const [channels, loading, error] = useCollection(
    collection(firebase.db, "rooms"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // console.log(channels);
  const addChannel = async () => {
    const channelName = prompt("please Enter the channel Name");
    if (channelName) {
      try {
        const docRef = await addDoc(collection(firebase.db, "rooms"), {
          name: channelName,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

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
            <li key={item.id}>
              <NavLink className="nav" to={item.path}>
                {item?.icon ? (
                  <span className="mrRight">{item?.icon}</span>
                ) : (
                  <span className="no_icon">#</span>
                )}

                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
        <li className="hoverLI">
          <span className="nav">
            <span className="mrRight">
              <ExpandLessIcon />
            </span>
            <span>show less</span>
          </span>
        </li>
        <hr />
        <li className="hoverLI">
          <span className="nav">
            <span className="mrRight">
              <KeyboardArrowDownIcon />
            </span>
            <span>channel</span>
          </span>
        </li>
        <hr />
        <li className="hoverLI" onClick={addChannel}>
          <span className="nav">
            <span className="mrRight">
              <AddIcon />
            </span>
            <span>Add Channel</span>
          </span>
        </li>
        {channels &&
          channels?.docs?.map((doc) => {
            return (
              <li
                key={doc?.id}
                onClick={() => dispatch(actions.getRoomName(doc?.data()?.name))}
              >
                <NavLink
                  className="nav"
                  to={{
                    pathname: `chat/${doc?.id}`,
                  }}
                >
                  <span className="no_icon">#</span>
                  <span>{doc?.data()?.name}</span>
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
  /* position: fixed; */
  margin-top: 3.6rem;
  color: white;
  /* left: 0;
  bottom: 0; */
  height: 100vh;

  background-color: var(--sideBar-color);
  max-width: 280px;
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
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
  > li > button {
    background-color: transparent;
    border: none;
  }
  .hoverLI {
    cursor: pointer;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.25rem 0;
    width: 100%;
    /* border: 2px solid red; */
    :hover {
      background: var(--Navbar-color);
      opacity: 0.8;
    }
    a {
      text-decoration: none;
    }
    .nav {
      display: flex;
      padding: 0.25rem 0.75rem;
      width: 100%;
      color: white;
      /* margin-left: 1rem; */
      .mrRight {
        margin-right: 1.5rem;
        > .MuiSvgIcon-root {
          font-size: 1rem;
          font-weight: 500;
        }
      }
      .no_icon {
        margin-left: 0.5rem;
        margin-right: 1.75rem;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
// <React.Fragment key={doc.id}>
//   {JSON.stringify(doc.data())},
// </React.Fragment>
