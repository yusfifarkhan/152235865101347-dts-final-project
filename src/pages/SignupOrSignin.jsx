import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import FormSignup from "../components/FormSignup";
import FormSignin from "../components/FormSignin";
import {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
} from "../services/fireBase";

const SignupOrSignin = ({ isSignUp }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const onEmailChangeHandler = (email) => {
    setCredential({
      ...credential,
      email: email,
    });
  };

  const onPasswordChangeHandler = (password) => {
    setCredential({
      ...credential,
      password: password,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (isSignUp) {
      registHandler();
    } else {
      loginHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        minHeight: "73vh",
      }}
    >
      {isSignUp ? (
        <FormSignup
          email={credential.email}
          emailHandler={onEmailChangeHandler}
          password={credential.password}
          passwordHandler={onPasswordChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
      ) : (
        <FormSignin
          email={credential.email}
          emailHandler={onEmailChangeHandler}
          password={credential.password}
          passwordHandler={onPasswordChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
      )}
    </Container>
  );
};

export default SignupOrSignin;
