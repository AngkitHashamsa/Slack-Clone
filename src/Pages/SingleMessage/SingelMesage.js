import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ChatInput from "../../components/ChatInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, doc, orderBy, query } from "firebase/firestore";
import Message from "../../components/Message";
import * as firebase from "../../firebase";
const SingelMesage = () => {
  const { id } = useParams();

  // console.log(props);
  const { roomName } = useSelector((state) => state.chat);
  const [messages, loading] = useCollection(
    query(
      collection(firebase.db, "rooms", id, "message"),
      orderBy("timestamp", "asc")
    )
  );
  // console.log(messages);
  // useEffect(() => {
  //   chatRef?.current?.scrollIntoView();
  //   console.log(chatRef?.current);
  // }, [loading, id]);
  return (
    <Container>
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
      <ChatContainer>
        {/* list all messages */}
        {messages &&
          messages?.docs?.map((doc) => {
            const data = doc?.data();

            return (
              <Message key={doc?.id} data={data} loading={loading} id={id} />
            );
          })}
      </ChatContainer>

      <ChatInput id={id} roomName={roomName} />
    </Container>
  );
};

export default SingelMesage;

// const ChatBottom = styled.div`
//   border: 1px solid red;
// `;

const Container = styled.div`
  position: relative;
  /* border: 2px red solid; */
  margin-top: 3.7rem;
  /* padding-top: 3.7rem; */
`;

const ChatContainer = styled.header`
  height: calc(100vh - 12.5rem);

  overflow: hidden;
  position: absolute;
  top: 2;
  left: 0;
  right: 0;

  :hover {
    overflow: auto;
  }
  ::-webkit-scrollbar {
    width: 12px;
    padding-right: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--scroll-color);
    border-radius: 10px;
    height: 5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
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
  h4 {
    margin-right: 10px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;
