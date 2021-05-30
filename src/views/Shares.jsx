import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import axios from "axios";
import SharedGoal from "../components/SharedGoal";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import GoalService from "../services/GoalService";

const Shares = ({ goals }) => {
  const [publicGoal, setPublicGoal] = useState(null);
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [sharedGoal] = GoalService.geSharedGoal();

  useEffect(() => {
    // fetch all public goals to show on the shares page
    // axios
    //   .get("/goal/public_goal", { withCredentials: true })
    //   .then((response) => {
    //     setPublicGoal(response.data.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (sharedGoal) {
      setLoading(false);
    }
  }, [sharedGoal]);
  // check whether the user joined
  const checkIfJoined = (goal) => {
    return goals.find((onGoingGoal) => onGoingGoal.id === goal.id);
  };

  return (
    <Wrapper>
      {!loading && (
        <CustomContainer>
          <Title>Shares</Title>

          <Subtitle>Trending</Subtitle>
          {/* map all public goals and pass the goal._id, goal, checkIfJoined(goal), publicGoal, setPublicGoal */}
          {sharedGoal &&
            sharedGoal.map((goal) => (
              <SharedGoal
                key={goal.id}
                goal={goal}
                joined={checkIfJoined(goal)}
                publicGoal={publicGoal}
                setPublicGoal={setPublicGoal}
              />
            ))}
        </CustomContainer>
      )}
      {loading && <Loader />}
    </Wrapper>
  );
};

export default Shares;
const Wrapper = styled.div`
  padding-top: 32px;
  flex: 1;
  display: flex;
  overflow: scroll;
  height: calc(100vh - 60px);

  @media (min-width: 992px) {
    height: calc(100vh - 80px);
  }
`;

const CustomContainer = styled(Container)`
  max-width: 888px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: var(--primaryShaded);
  margin-bottom: 30px;

  @media (max-width: 991.98px) {
    display: none;
  }
`;

const Subtitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  display: block;
  margin-top: 38px;

  @media (max-width: 991.98px) {
    margin-top: 0px;
  }
`;
