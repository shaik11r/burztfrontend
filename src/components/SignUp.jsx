import React from "react";
import { useContext, useState } from "react";
import { studentContext } from "../providers/StudentContextProvider";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(studentContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "0 auto",
        gap: "1rem",
      }}>
      <p>Sign Up</p>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter the Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signUp(username, password);
        }}>
        Sign Up
      </button>
      <Link to="/signin">Exisiting User</Link>
    </div>
  );
};

export default SignUp;
