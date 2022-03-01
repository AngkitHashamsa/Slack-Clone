// import React from "react";
import styled from "styled-components";
// import React, { useRef } from "react";
import React, { useEffect, useRef } from "react";
const Message = ({ data = [], loading }) => {
  const { message, user, timestamp, userImage } = data;
  // console.log(data);
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef?.current?.scrollIntoView();

    // console.log(chatRef?.current);
  }, [loading]);
  // chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <MessageContainer ref={chatRef}>
      <img src={userImage} alt="profile" width={25} height={25} />
      <MessageInfo>
        <h4>
          {user}
          {""}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          {/* new Date(timestamp?.toDate()) */}
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    width: 50px;
    border-radius: 8px;
    object-fit: cover;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  h4 {
    span {
      color: gray;
      font-weight: 300;
      margin-left: 4px;
      font-size: 0.875rem;
    }
  }
  p {
    margin-top: 0.5rem;
  }
`;
