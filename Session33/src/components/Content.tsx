import React from "react";
import { Button } from "antd";
import TaskItem from "./TaskItem";
import CartItem from "./CartItem";

export default function Content() {
  return (
    <div className="flex gap-4 ">
      <TaskItem />
      <CartItem />
    </div>
  );
}
