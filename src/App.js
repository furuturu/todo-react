import React, { useState } from "react";
import { Title } from "./components/Title/Title";
import { Control } from "./components/Control/Control";
import { List } from "./components/List/List";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      content: "тест1",
      isActive: false,
      date: "21/10/2021, 00:00:00",
    },
    {
      id: 2,
      content: "тест2",
      isActive: true,
      date: "21/10/2021, 00:00:00",
    },
    {
      id: 3,
      content: "тест3",
      isActive: true,
      date: "21/10/2021, 00:00:00",
    },
  ]);

  return (
    <div className="App">
      <Title />
      <Control todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
