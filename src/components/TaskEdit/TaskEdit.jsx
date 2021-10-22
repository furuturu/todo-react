import React from "react";
import { TaskContainer, TasksWrapper } from "./TaskEdit.styles";

export const TaskEdit = ({ id, status, saveEditedTodo, value, setValue }) => {
  const handleSubmit = (e, id) => {
    if (e.key === "Enter" && value) {
      saveEditedTodo(id);
    }
  };

  return (
    <TasksWrapper>
      <TaskContainer status={status}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => handleSubmit(e, id)}
        />
      </TaskContainer>
      <button onClick={() => saveEditedTodo(id)}>Save edit</button>
    </TasksWrapper>
  );
};
