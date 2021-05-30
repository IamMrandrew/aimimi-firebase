import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const GoalService = {
  getUserGoal: (uid) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCollectionData(
      firestore.collection("users").doc(uid).collection("goals"),
      { idField: "id" }
    );
  },
  geSharedGoal: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCollectionData(
      firestore.collection("goals").where("publicity", "==", true),
      { idField: "id" }
    );
  },
};

export default GoalService;
