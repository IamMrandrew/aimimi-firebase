import React from "react";
import { GlobalStyle } from "../components/GlobalStyle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImage from "../assets/LogInBack.png";
import Container from "react-bootstrap/Container";
import { FaRegEnvelope } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import styled from "styled-components/macro";
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState(null);
  const history = useHistory();

  const Signup = () => {
    let formdata = new FormData();
    // we will set user email, passwrod, username and img in formdata
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("username", username);
    formdata.append("img", img);
    // we will send a POST request to post the new account details
    axios
      .post("/user/signup", formdata, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        history.push("/email-check");
      })
      .catch((error) => {
        alert("Signup Failed. Try Again.");
      });
  };

  // Handle the clear input button
  const clearEmail = (e) => {
    e.preventDefault();
    setEmail("");
  };
  const clearPassword = (e) => {
    e.preventDefault();
    setPassword("");
  };
  const clearUsername = (e) => {
    e.preventDefault();
    setUsername("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    Signup();
  };

  // Handle the uploaded file button
  const fileHandler = (e) => {
    setImg(e.target.files[0]);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Main>
          <ImageBackWrapper>
            <LoginImg src={LoginImage} />
          </ImageBackWrapper>

          <RightWrapper>
            <CustomContainer>
              <Title>Sign Up</Title>

              <Signupform
                method="POST"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <BarWrapper>
                  <CustomAiOutlineEye />
                  <FormInput
                    id="confirm_password"
                    type="username"
                    placeholder="Enter your name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                  <CustomFaTimes onClick={clearUsername} />
                </BarWrapper>

                <BarWrapper>
                  <CustomFaEnvelope />
                  <FormInput
                    id="email"
                    type="email"
                    name="email"
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

                <SignupBar>Sign Up</SignupBar>

                <Subtitle> Already have an account?</Subtitle>
                <LoginLink to="/login"> Log In</LoginLink>
              </Signupform>
            </CustomContainer>
          </RightWrapper>
        </Main>
      </Wrapper>
    </>
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

const Subtitle = styled.span`
  font-family: "Roboto";
  font-size: 16px;
  color: var(--monoTinted);
  font-weight: 500;
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

const CustomAiOutlineEye = styled(AiOutlineEye)`
  width: 25px;
  height: 25px;
  color: var(--monoSecondary);
`;

const CustomFaTimes = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: #a0a3bd;
  margin-left: auto;
`;

const SignupBar = styled.button`
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

const LoginLink = styled(Link)`
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

const Signupform = styled.form``;

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

export default Signup;
