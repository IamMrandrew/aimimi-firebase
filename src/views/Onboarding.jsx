import React, { useRef } from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.svg";
import Onboarding1 from "../assets/Onboarding_1.png";
import Onboarding2 from "../assets/Onboarding_2.png";
import Onboarding3 from "../assets/Onboarding_3.png";
import screenShot1 from "../assets/screenshot_onboarding_1.png";
import screenShot2 from "../assets/screenshot_onboarding_2.png";
import apk from "../assets/aimimi.apk";
import { Link } from "react-router-dom";
import MobileStoreButton from "react-mobile-store-button";

//Onboarding page
const Onboarding = () => {
  const downloadRef = useRef(null);

  return (
    <Wrapper data-testid="onboardingComponent">
      <CustomNavbar expand="lg">
        <CustomContainer>
          <Navbar.Brand>
            <Logo src={logo} />
            <Brand>aimimi</Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <CustomNav>
              <NavLink to="/signup"> Signup</NavLink>
              <NavLink to="/login">Log in</NavLink>
            </CustomNav>
          </Navbar.Collapse>
        </CustomContainer>
      </CustomNavbar>
      <Hero>
        <CustomContainer>
          <FlexWrapper hero={true}>
            <ContentWrapper>
              <SloganWrapper>
                <Slogan>A goal sharing application</Slogan>
                <RefButton onClick={() => downloadRef.current.scrollIntoView()}>
                  Get aimimi
                </RefButton>
              </SloganWrapper>
            </ContentWrapper>
            <ImgWrapper hide={true}>
              <OnboardingImg1 src={Onboarding3} />
            </ImgWrapper>
          </FlexWrapper>
        </CustomContainer>
      </Hero>
      <Intro>
        <CustomContainer>
          <FlexWrapper>
            <ImgWrapper left={true} hide={false}>
              <OnboardingImg2 src={screenShot1} />
            </ImgWrapper>
            <ContentWrapper>
              <TextWrapper>
                <Title>Why choose us?</Title>
                <Para>
                  The project’s objective is to develop a platform for people
                  who are hoping to crush their goals. Our app aims to rise
                  users' motivation to the fullest by taking reference of social
                  media.
                </Para>
                <Para>
                  The core feature of the platform is goal tracking, also with
                  some other features like goal sharing, leaderboard, social
                  networking service, etc.
                </Para>
              </TextWrapper>
            </ContentWrapper>
          </FlexWrapper>
          <FlexWrapper>
            <ContentWrapper2>
              <TextWrapper>
                <Title>Shared Goal</Title>
                <Para>
                  Aimimi introduced shared goals for our users. User explore
                  goal in shares and feel free to challenge themselves. Users
                  can participate other's goal once it is set as public.
                </Para>
                <Para>
                  With the features of Leaderboard an Activity, Users can be
                  motivated through the encouragement and a sense of competition
                  from others
                </Para>
              </TextWrapper>
            </ContentWrapper2>
            <ImgWrapper hide={false}>
              <OnboardingImg2 src={screenShot2} />
            </ImgWrapper>
          </FlexWrapper>
        </CustomContainer>
        <Download ref={downloadRef}>
          <CustomContainer>
            <FlexWrapper>
              <ContentWrapper>
                <TextWrapper>
                  <Title style={{ marginBottom: 0 }}>Get it on Mobile</Title>
                  <Para>
                    Aimimi offer options for both Android and iOS. You can now
                    download on Google play or App store.
                  </Para>
                  {/* <Para>
                    Google play still processing, get the{" "}
                    <LinkApk href={apk}>apk</LinkApk> now.
                  </Para> */}
                  <StoreButtons>
                    <MobileStoreButton
                      store="android"
                      url={
                        "https://play.google.com/store/apps/details?id=com.aimimi.aimimi"
                      }
                      linkProps={{ title: "Google Play Button" }}
                      width={150}
                      height={85}
                    />
                    <MobileStoreButton
                      store="ios"
                      url={
                        "https://apps.apple.com/hk/app/aimimi/id1569332599?l=en"
                      }
                      linkProps={{ title: "App Store Button" }}
                      width={150}
                    />
                  </StoreButtons>
                </TextWrapper>
              </ContentWrapper>
              <ContentWrapper>
                <TextWrapper>
                  <Title>Continue on Desktop</Title>
                  <Para>
                    Due to the work of our developers, we also provide a web
                    version of aimimi. Now, user can keep motivated everywhere.
                  </Para>
                  <Para>(Web still under development)</Para>
                  <Button to="/signup">Get Started</Button>
                </TextWrapper>
              </ContentWrapper>
            </FlexWrapper>
          </CustomContainer>
        </Download>
      </Intro>
    </Wrapper>
  );
};

export default Onboarding;

const Wrapper = styled.div``;
const CustomContainer = styled(Container)`
  position: relative;
`;

// Navbar

const CustomNavbar = styled(Navbar)`
  background-color: var(--primaryGoal);
  padding-top: 20px;

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .navbar-toggler {
    color: white;
    border: none;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

const Logo = styled.img`
  margin-right: 20px;
  width: 32px;
  height: 32px;
`;

const Brand = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: white;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-left: 20px;
  text-align: right;
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 991.98px) {
    padding-right: 10px;
    margin-bottom: 12px;
  }
`;

// Hero Section

const Hero = styled.section`
  background-color: var(--primaryGoal);

  @media (max-width: 991.98px) {
    padding-bottom: 80px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  /* @media (max-width: 991.98px) {
    padding-bottom: 80px;
  ${(props) => (props.hero ? true : false)};
  } */
`;

const ContentWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  min-height: 300px;

  @media (max-width: 991.98px) {
    flex-basis: 100%;
  }
`;

const ContentWrapper2 = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;

  @media (max-width: 991.98px) {
    flex-basis: 100%;
  }
`;

const ImgWrapper = styled.div`
  flex-basis: 50%;
  text-align: ${(props) => (props.left ? "left" : "right")};

  @media (max-width: 991.98px) {
    flex-basis: 100%;
    order: 2;
    display: ${(props) => (props.hide ? "none" : "block")};
    text-align: center;
    margin-bottom: 30px;
  }
`;

const SloganWrapper = styled.div`
  max-width: 350px;
`;

const TextWrapper = styled.div``;

const Slogan = styled.h1`
  color: white;
  font-size: 340x;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 991.98px) {
    font-size: 34px;
  }
`;

const Button = styled(Link)`
  display: block;
  appearance: none;
  background: var(--primaryMild);
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 10px;
  width: 160px;
  border-radius: 18px;
  cursor: pointer;
  text-align: center;

  :hover {
    text-decoration: none;
    color: white;
  }
`;

const RefButton = styled.button`
  display: block;
  appearance: none;
  background: var(--primaryMild);
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 10px;
  width: 160px;
  border-radius: 18px;
  cursor: pointer;
  text-align: center;
  border: none;
  margin-top: 6px;
`;

const OnboardingImg1 = styled.img`
  width: 100%;
  max-width: 400px;
  position: relative;
  top: 30px;
`;

// Intro Section

const Intro = styled.section`
  padding-top: 40px;

  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
`;

const Onboarding1Mobile = styled.img`
  width: 320px;
  height: 320px;
`;

const OnboardingImg2 = styled.img``;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Para = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--monoSecondary);
`;

const Download = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  background: var(--background);
  padding-top: 80px;
  padding-bottom: 20px;

  & > div > div > div {
    align-items: flex-start;
  }
`;

const StoreButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const LinkApk = styled.a``;
