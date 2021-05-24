import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  const signupWithEmail = (name, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginWithEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loginWithEmail,
    signupWithEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
