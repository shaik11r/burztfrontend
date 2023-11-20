import { useContext } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OtherStudents from "./components/OtherStudents";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { StudentContextProvider, studentContext } from "./providers/StudentContextProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const { token } = useContext(studentContext);
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Navbar />
      <Routes>
        {token ? (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/other-students" element={<OtherStudents />} />
            <Route path="/" element={<Navigate to="/signin" />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
