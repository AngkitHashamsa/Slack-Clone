import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import * as firebase from "../../firebase";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as actions from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = () => {
    signInWithPopup(firebase.auth, firebase.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        console.log(token);
        localStorage.setItem("accessToken", token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        navigate("/threads");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src={
            "https://www.datocms-assets.com/14946/1635413686-slack.jpeg?auto=format"
          }
          alt="slack"
        />
        <h1>Sign in to Slack</h1>
        <p>code.slack.com</p>
        <Button onClick={onSubmit}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: cover;
    height: 100px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
