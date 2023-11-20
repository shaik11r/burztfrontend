import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { studentContext } from "../providers/StudentContextProvider";

const Navbar = () => {
  const { token, setToken, setCurrentUser, setOtherStudents } = useContext(studentContext);
  const signOut = () => {
    localStorage.removeItem("authorization");
    setToken("");
    setCurrentUser("");
    setOtherStudents("");
  };
  return token ? (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/other-students">Other Students</Link>
      <Link to="/signin" onClick={signOut}>
        signout
      </Link>
    </div>
  ) : (
    <>Burzt Institue</>
  );
};

export default Navbar;
