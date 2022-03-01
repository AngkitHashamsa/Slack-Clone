import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const SingelMesage = () => {
  const { id } = useParams();
  // console.log(props);
  const { roomName } = useSelector((state) => state.chat);
  return (
    <div>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomName}</strong>
          </h4>
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>
          <HelpOutlineIcon />
          <span>Details</span>
        </HeaderRight>
      </Header>
      <ChatContainer></ChatContainer>
    </div>
  );
};

export default SingelMesage;
const ChatContainer = styled.header`
  height: calc(100vh - 8rem);
  overflow: auto;
  /* border: 2px solid red; */
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
