import styled from "styled-components";

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskContainer = styled.div`
  //таска и дата
  min-height: 200px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  border: black solid;
  border-radius: 15px;
  box-shadow: darkslategrey;
  background-color: ${(props) => (props.status ? "#78dbe2" : "grey")};
`;
export const TasksWrapper = styled.div`
  //таска и кнопки
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TasksContent = styled.div`
  //таска
  width: 500px;
  text-align: center;
  word-wrap: break-word;
  font-weight: bold;
  font-size: 1.6rem;
`;

export const StyledData = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
