import React, { useState, useContext, useEffect } from "react";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { GlobalStyle } from "./components/GlobalStyle";

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

import { useAuth } from "./contexts/AuthContext";

const Authenticate = () => {
  const [loading, setLoading] = useState(false);

  // Firebase
  const { currentUser } = useAuth();

  return (
    <>
      <GlobalStyle />
      <Switch>
        {/*  if user logged in, then user can view his/her homepage */}
        {!loading && currentUser && <App />}
        {/* If user did not login, then only onboarding page, signin and login page will be shown */}
        {loading && <Loader />}
        <Route exact path="/">
          <Onboarding />
        </Route>
        <Route path="/login">
          <Login setLoading={setLoading} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
        <Route path="/email-check">
          <Verification />
        </Route>
      </Switch>
    </>
  );
};

export default Authenticate;
