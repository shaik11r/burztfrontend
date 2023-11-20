import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const studentContext = createContext({
  signUp: async () => {},
  signIn: async () => {},
  token: "",
  setToken: () => {},
  getCurrentUser: () => {},
  currentUser: "",
  setCurrentUser: () => {},
  getOtherStudents: () => {},
  otherStudents: "",
  setOtherStudents: () => {},
});

const StudentContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authorization"));
  const [currentUser, setCurrentUser] = useState("");
  const [otherStudents, setOtherStudents] = useState("");
  const navigate = useNavigate();

  const signUp = async (username, password) => {
    const response = await fetch("https://burztbackend.onrender.com/students/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      console.log(data.message);
      navigate("/sigin");
    }
  };
  const signIn = async (username, password) => {
    const response = await fetch("https://burztbackend.onrender.com/students/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    const token = response.headers.get("authorization");
    if (data.error) {
      alert(data.error);
    } else {
      console.log(data.message, token);
      localStorage.setItem("authorization", token);
      setToken(token);
      navigate("/home");
    }
  };

  const getCurrentUser = async () => {
    const response = await fetch("https://burztbackend.onrender.com/students/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();

    setCurrentUser(data.username);
  };

  const getOtherStudents = async () => {
    const response = await fetch("https://burztbackend.onrender.com/students/others", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    setOtherStudents(data);
  };

  return (
    <>
      <studentContext.Provider
        value={{
          signUp,
          signIn,
          token,
          setToken,
          getCurrentUser,
          currentUser,
          setCurrentUser,
          otherStudents,
          setOtherStudents,
          getOtherStudents,
        }}>
        {children}
      </studentContext.Provider>
    </>
  );
};
export { studentContext, StudentContextProvider };
