import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Feed from "../components/Feed";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import FeedService from "../services/FeedService";

// Activity button
const Activity = ({ goals }) => {
  // const [feeds, setFeeds] = useState([]);
  const { auth } = useContext(AuthContext);
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [feeds] = FeedService.getFeeds(goals);

  useEffect(() => {
    // get the feeds the relative to the user, which is a get request
    // axios
    //   .get("/feed", { withCredentials: true })
    //   .then((response) => {
    //     setFeeds(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setFeeds(FeedService.getFeeds(goals));
    if (feeds) {
      setLoading(false);
      console.log(feeds);
    }
  }, [feeds]);

  // Check whether user liked the button
  const checkIfLiked = (feed) => {
    // return feed.like.find((liked) => liked === currentUser.uid);
  };

  return (
    <Wrapper>
      {!loading && (
        <CustomContainer>
          <Title>Activity</Title>
          {/* Map the feed and pass the checkIfLiked and feeds to component <Feed> */}
          {feeds.map((feed) => (
            <Feed
              feed={feed}
              key={feed.id}
              liked={checkIfLiked(feed)}
              feeds={feeds}
              // setFeeds={setFeeds}
            />
          ))}
        </CustomContainer>
      )}
      {loading && <Loader />}
    </Wrapper>
  );
};

export default Activity;

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
