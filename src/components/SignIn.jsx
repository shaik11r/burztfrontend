import React from "react";
import { useContext, useState } from "react";
import { studentContext } from "../providers/StudentContextProvider";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(studentContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "0 auto",
        gap: "1rem",
      }}>
      <p>Sign In</p>
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
          signIn(username, password);
        }}>
        Sign In
      </button>
      <Link to="/signup">new user? signup</Link>
    </div>
  );
};

export default SignIn;
