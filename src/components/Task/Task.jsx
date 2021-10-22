import React from "react";
import {
  ButtonsWrapper,
  StyledData,
  TaskContainer,
  TasksContent,
  TasksWrapper,
} from "./Task.styles";

export const Task = ({
  status,
  content,
  date,
  id,
  deleteTodo,
  editTodo,
  statusTodo,
}) => {
  return (
    <TasksWrapper>
      <TaskContainer status={status}>
        <TasksContent>{content}</TasksContent>
        <StyledData>Created on {date}</StyledData>
      </TaskContainer>
      <ButtonsWrapper>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        <button onClick={() => editTodo(id, content)}>Edit</button>
        <button onClick={() => statusTodo(id)}>Status</button>
      </ButtonsWrapper>
    </TasksWrapper>
  );
};
