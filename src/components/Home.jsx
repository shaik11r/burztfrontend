import React from "react";
import { useContext, useEffect } from "react";
import { studentContext } from "../providers/StudentContextProvider";
const Home = () => {
  const { getCurrentUser, currentUser } = useContext(studentContext);
  useEffect(() => {
    if (!currentUser) {
      getCurrentUser();
    }
  }, [currentUser]);
  return <>{currentUser ? <h3>Welcome , {currentUser}</h3> : <p>Loading...</p>}</>;
};

export default Home;
