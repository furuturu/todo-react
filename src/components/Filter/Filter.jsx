import React from "react";
import { FilterButtons } from "./Filter.styles";

export const Filter = ({ filterTodo }) => {
  return (
    <FilterButtons>
      <button onClick={() => filterTodo("all")}>all</button>
      <button onClick={() => filterTodo(true)}>open</button>
      <button onClick={() => filterTodo(false)}>closed</button>
    </FilterButtons>
  );
};
