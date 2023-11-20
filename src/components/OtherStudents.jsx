import React, { useEffect } from "react";
import { useContext } from "react";
import Student from "./Student";
import { studentContext } from "../providers/StudentContextProvider";

const OtherStudents = () => {
  const { getOtherStudents, otherStudents } = useContext(studentContext);
  useEffect(() => {
    if (!otherStudents.length) {
      getOtherStudents();
    }
  }, [otherStudents.length]);
  return (
    <>
      <h3>Other Students</h3>
      {otherStudents.length ? (
        otherStudents.map((stud) => {
          return <Student key={stud.userId} username={stud.username} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default OtherStudents;
