import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const FeedService = {
  getFeeds: (goals) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCollectionData(firestore.collection("feeds"), { idField: "id" });
  },
};

export default FeedService;
