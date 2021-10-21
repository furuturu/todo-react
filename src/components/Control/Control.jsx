import React, { useState } from "react";
import { nanoid } from "nanoid";
import { StyledControl } from "./Control.styles";

export const Control = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    if (value) {
      setTodo(
        //новый массив: существующий туду + таска
        [
          ...todo,
          {
            id: nanoid(),
            content: value,
            isActive: true, //по умолчанию туду открыто
            date: new Date(Date.now()).toLocaleString("en-GB"),
          },
        ]
      );
    }
    setValue("");
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && value) {
      saveTodo();
    }
  };

  return (
    <StyledControl>
      <input
        placeholder="input your task"
        value={value} //из хука
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      <button onClick={saveTodo}>Save</button>
    </StyledControl>
  );
};
