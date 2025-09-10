import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student2() {
  const [studentName, setStudentName] = useState("");
  const [searchRoute, setSearchRoute] = useSearchParams();

  const handlefind = () => {
    setSearchRoute({
      StudentName: studentName,
    });
  };

  const valueName = searchRoute.get("StudentName");
  return (
    <div>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handlefind}>Find Student</button>
      <h1>{valueName}</h1>
    </div>
  );
}
