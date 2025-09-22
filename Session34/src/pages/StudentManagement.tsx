import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useState } from "react";

const StudentManagement = () => {
  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar />
        <StudentList />
      </div>
      <StudentForm />
    </div>
  );
};

export default StudentManagement;
