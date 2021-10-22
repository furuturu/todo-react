import React, { useState } from "react";
import { useEffect } from "react";
import { ListWrapper } from "./List.styles";
import { Task } from "../Task/Task";
import { TaskEdit } from "../TaskEdit/TaskEdit";
import { Footer } from "../Footer/Footer";
import { Filter } from "../Filter/Filter";

export const List = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState(""); //для редактирования
  const [filter, setFilter] = useState(todo); //массив для фильтрации в котором по умолчанию лежат все таски

  useEffect(() => {
    setFilter(todo); //при изменении массива страница перерисовывается
  }, [todo]); //только при изменении

  const filterTodo = (isActive) => {
    if (isActive === "all") {
      setFilter(todo);
    } else {
      const newTodo = [...todo].filter((item) => item.isActive === isActive); //фильтруем массив всех тасок по полученному статусу
      setFilter(newTodo);
    }
  };

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter((item) => item.id !== id); //создаем массив-копию без выбранного элемента (перебираемый ид не равен ид от кнопки)
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      //фильтруем туду, ищем элемент с таким же айди и меняем статус
      if (item.id === id) {
        item.isActive = !item.isActive;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const editTodo = (id, content) => {
    setEdit(id);
    setValue(content);
  };

  const saveEditedTodo = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.content = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null); //выход из редактирования
  };

  return (
    <ListWrapper>
      <Filter filterTodo={filterTodo} />
      {filter.map(
        (
          item //каждый элемент массива туду в переменной item
        ) => (
          <div key={item.id}>
            {edit === item.id ? ( //режим редактирования активен?
              <TaskEdit
                id={item.id}
                status={item.isActive}
                saveEditedTodo={saveEditedTodo}
                value={value}
                setValue={setValue}
              />
            ) : (
              <Task
                status={item.isActive}
                id={item.id}
                content={item.content}
                date={item.date}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                statusTodo={statusTodo}
              />
            )}
          </div>
        )
      )}
      <Footer amount={filter.length} />
    </ListWrapper>
  );
};
