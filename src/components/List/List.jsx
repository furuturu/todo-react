import React, { useEffect } from "react";
import { useState } from "react";
import {
  TaskContainer,
  TasksContent,
  BigWrapper,
  ButtonsWrapper,
  TasksWrapper,
  StyledData,
} from "./List.styles";
import { Footer } from "../Footer/Footer";

export const List = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState(""); //для редактирования
  const [filter, setFilter] = useState(todo); //массив для фильтрации в котором по умолчанию лежат все таски

  const handleSubmit = (e, id) => {
    if (e.key === "Enter" && value) {
      saveEditedTodo(id);
    }
  };

  useEffect(() => {
    //при каждом изменении массива туду при фильтрации рендерим страницу
    setFilter(todo);
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
    setTodo(newTodo); //передаем массив без удаленного туду в стейт
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      //фильтруем туду, ищем элемент с таким же айди и меняем статус
      if (item.id === id) {
        item.isActive = !item.isActive;
      }
      return item; //сворачиваем цикл если элемент нашелся
    });
    setTodo(newTodo); //обновляем стейт
  };

  const editTodo = (id, content) => {
    setEdit(id);
    setValue(content); //при редактировании контент в вэлью
  };

  const saveEditedTodo = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.content = value;
      }
      return item; //выход из цикла
    });
    setTodo(newTodo); //обновляем стейт
    setEdit(null); //выход из редактирования
  };
  return (
    <BigWrapper>
      <ButtonsWrapper>
        <button onClick={() => filterTodo("all")}>all</button>
        <button onClick={() => filterTodo(true)}>open</button>
        <button onClick={() => filterTodo(false)}>closed</button>
      </ButtonsWrapper>
      {filter.map(
        (
          item //каждый элемент массива туду в переменной item
        ) => (
          <TasksWrapper key={item.id}>
            {edit === item.id ? ( //редактирование активно? (айди при клике на edit)
              <TaskContainer status={item.isActive}>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => handleSubmit(e, item.id)}
                />
              </TaskContainer>
            ) : (
              <TaskContainer status={item.isActive}>
                <TasksContent>{item.content}</TasksContent>
                <StyledData>Created on {item.date}</StyledData>
              </TaskContainer>
            )}
            {
              //сокрытие кнопок в режиме редактирования
              edit === item.id ? (
                <button onClick={() => saveEditedTodo(item.id)}>
                  Save edit
                </button>
              ) : (
                <ButtonsWrapper>
                  <button onClick={() => deleteTodo(item.id)}>Delete</button>
                  <button onClick={() => editTodo(item.id, item.content)}>
                    Edit
                  </button>
                  <button onClick={() => statusTodo(item.id)}>Status</button>
                </ButtonsWrapper>
              )
            }
          </TasksWrapper>
        )
      )}
      <Footer amount={filter.length} />
    </BigWrapper>
  );
};
