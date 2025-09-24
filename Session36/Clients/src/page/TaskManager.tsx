import React from "react";
import Head from "../components/Head";
import Add from "../components/Add";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";

export default function TaskManager() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <Head />
      <Add />
      <FilterBar />
      <TaskList />
    </div>
  );
}
