import styled from "styled-components/macro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImage from "../assets/LogInBack.png";
import Container from "react-bootstrap/Container";
import { FaRegEnvelope } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useHistory, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

// Login Page
const Login = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { loginWithEmail } = useAuth();

  // Handle login button
  // const Login = (emails, passwords) => {
  //   // Send a post request with user inputed email and password
  //   axios
  //     .post(
  //       "/user/login",
  //       { password: passwords, email: emails },
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((response) => {
  //       // If user successfully logged in, setAuth to save the user information and redirect to the home page
  //       setAuth(response.data);

  //       setLoading(true);
  //     })
  //     .catch((error) => {
  //       //If the email / password is wrong, pop up an alert
  //       alert("Login Failed. Try Again.");
  //     });
  // };

  // Call login function after user clicked the login button
  const submitHandler = async (e) => {
    e.preventDefault();
    // Login(emails.email, passwords.password);
    try {
      await loginWithEmail(email, password);
      history.push("/");
    } catch {
      console.log("Failed to log in");
    }
  };
  // clear the email state
  const clearEmail = (e) => {
    e.preventDefault();
    setEmail("");
  };
  // clear the password state
  const clearPassword = (e) => {
    e.preventDefault();
    setPassword("");
  };
  return (
    <Wrapper>
      <Main>
        <ImageBackWrapper>
          <LoginImg src={LoginImage} />
        </ImageBackWrapper>

        <RightWrapper>
          <CustomContainer>
            <Title>Log In</Title>
            <LoginForm method="POST" onSubmit={submitHandler}>
              <BarWrapper>
                <CustomFaEnvelope />
                <FormInput
                  id="email"
                  type="email"
                  name="name"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <CustomFaTimes onClick={clearEmail} />
              </BarWrapper>
              <BarWrapper>
                <CustomFiLock />
                <FormInput
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <CustomFaTimes onClick={clearPassword} />
              </BarWrapper>
              <LoginBar>Login</LoginBar>
              <Subtitle> Don't have an account? </Subtitle>
              <SignupLink to="/signup">Sign up </SignupLink>
            </LoginForm>
          </CustomContainer>
        </RightWrapper>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  height: 100vh;
  width: 100%;
  background-color: var(--primaryGoal);
`;

const Main = styled(Col)`
  background-color: white;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  height: 100%;

  @media (max-width: 991.98px) {
    margin-top: auto;
    display: block;
    height: 80vh;
    border-radius: 40px 40px 0px 0px;
    padding-top: 40px;
  }
`;

const ImageBackWrapper = styled.div`
  background-color: var(--primaryGoal);
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991.98px) {
    display: none;
  }
`;

const LoginImg = styled.img`
  max-width: 100%;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 991.98px) {
    max-height: 90%;
  }
`;
const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-size: 38px;
  font-weight: 700;
  color: #000000;

  margin-bottom: 50px;

  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
`;

const CustomContainer = styled(Container)`
  max-width: 481px;
`;

const BarWrapper = styled.div`
  border-radius: 16px;
  border: 2.41px solid var(--primaryGoal);
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  max-width: 481px;
  padding: 10px 14px;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 767.98px) {
    margin-top: 8px;
  }
`;

const CustomFaEnvelope = styled(FaRegEnvelope)`
  width: 25px;
  height: 25px;
  color: var(--monoSecondary);
`;

const CustomFiLock = styled(FiLock)`
  width: 25px;
  height: 25px;
  color: var(--monoSecondary);
`;

const CustomFaTimes = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: #a0a3bd;
  cursor: pointer;
`;

const LoginBar = styled.button`
  margin-top: 24px;
  width: 100%;
  border-radius: 18px;
  background-color: var(--primaryGoal);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  display: block;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;

const LoginForm = styled.form``;

const FormInput = styled.input`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  border: none;
  width: 100%;
  margin-left: 15px;
  outline: none;
  color: var(--monoSecondary);
`;

const Subtitle = styled.span`
  font-family: "Roboto";
  font-size: 16px;
  color: var(--monoTinted);
  font-weight: 500;
`;

const SignupLink = styled(Link)`
  font-family: "Roboto";
  font-size: 16px;
  color: var(--primaryShaded);
  font-weight: 500;
  padding-bottom: 0.5px;
  outline: none;

  :hover {
    color: #1c4b56;
  }
`;

export default Login;
