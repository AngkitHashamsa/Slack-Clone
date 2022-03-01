import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import * as firebase from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const ChatInput = ({ id, roomName }) => {
  const inputField = useRef(null);
  // console.log(id);
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("hello");
    // if (!id) {
    //   return false;
    // }

    try {
      const docRef = await addDoc(
        collection(firebase.db, "rooms", id, "message"),
        {
          message: inputField.current.value,
          timestamp: serverTimestamp(),
          user: "Angkit",
          userImage:
            "https://media.istockphoto.com/photos/big-and-small-picture-id172759822?b=1&k=20&m=172759822&s=170667a&w=0&h=kkmaR2OYuS14rTiEotbzXoBecwnRePNC79Jsgl3M4dY=",
        }
      );
      inputField.current.value = "";
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <InputContainer>
      <form>
        <input
          type="text"
          placeholder={`Message #${roomName}`}
          ref={inputField}
          required
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </InputContainer>
  );
};

export default ChatInput;
const InputContainer = styled.div`
  border-radius: 20px;
  form {
    position: relative;
    display: flex;
    justify-content: center;
    input {
      position: fixed;
      bottom: 20px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }
    button {
      display: none;
    }
  }
`;
