import React, { useState, useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { GlobalStyle } from "./components/GlobalStyle";
import { AuthContext } from "./contexts/AuthContext";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./views/Login";
import Today from "./views/Today";
import Verification from "./views/Verification";
import Goals from "./views/Goals";
import Signup from "./views/Signup";
import Onboarding from "./views/Onboarding";
import Overlay from "./components/Overlay";
import Details from "./components/Details";
import Shares from "./views/Shares";
import Profile from "./views/Profile";
import Activity from "./views/Activity";
import Leaderboard from "./views/Leaderboard";
import Loader from "./components/Loader";
import SingleFeed from "./views/SingleFeed";
import OtherProfile from "./views/OtherProfile";
import Users from "./views/Users";
import GoalService from "./services/GoalService";

import { useAuth } from "./contexts/AuthContext";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // goals state contain goals from user
  // const [goals, setGoals] = useState([]);

  // Firebase
  const { currentUser } = useAuth();
  const [goals] = GoalService.getUserGoal(currentUser.uid);

  // userSharedGoals state contain all shared goals
  const [userSharedGoals, setUserSharedGoals] = useState([]);

  // const { auth, setAuth, setPropic, setAuthLoading } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("USER", currentUser);
    console.log(goals);
  }, [goals, currentUser]);
  // useEffect function will automatically and independently run
  // useEffect(() => {
  //   //axios.get used GET request to fetch user data from MongoDB
  //   axios
  //     .get("/user", { withCredentials: true })
  //     .then((response) => {
  //       setAuth(response.data);

  //       // fetch user profile picture with matched user email and password
  //       axios
  //         .get(`/user/propic/`, { withCredentials: true })
  //         .then((response) => {
  //           setPropic(response.data);
  //           setAuthLoading(false);
  //           setLoading(false);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setLoading(false);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       setLoading(false);
  //     });
  // }, [setAuth, setPropic, loading]);

  // useEffect(() => {
  //   // Fetch user goals with matched user information
  //   axios
  //     .get("/goal", { withCredentials: true })
  //     .then((response) => {
  //       setGoals(response.data);
  //       setUserSharedGoals(
  //         // we will only get the shared goal from database
  //         response.data.filter((goal) => goal.publicity === true)
  //       );
  //       console.log(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, [auth]);

  return (
    <>
      <Overlay showModal={showModal} setShowModal={setShowModal} />
      <Wrapper>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          userSharedGoals={userSharedGoals}
        />
        <Main lg={9}>
          <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Route exact path="/">
            <Today
              showModal={showModal}
              setShowModal={setShowModal}
              goals={goals}
            />
          </Route>
          <Route exact path="/goals">
            <Goals goals={goals} />
          </Route>
          <Route path="/goals/:id">
            <Details goals={goals} />
          </Route>
          <Route path="/shares">
            <Shares goals={goals} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/:id">
            <OtherProfile />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/feed/:id">
            <SingleFeed />
          </Route>
          <Route path="/leaderboard/:id">
            <Leaderboard userSharedGoals={userSharedGoals} />
          </Route>
        </Main>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled(Row)`
  height: 100vh;
  width: 100%;
  background-color: white;
  overflow: auto;

  @media (min-width: 992px) {
    /* temporary fixed */
    /* overflow: hidden; */
  }
`;

const Main = styled(Col)`
  background-color: var(--background);
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
