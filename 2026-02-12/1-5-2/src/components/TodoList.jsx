import styled from "@emotion/styled";
import { useReducer, useState } from "react";
import { theme } from "../styles/theme";

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.ls};
  width: 400px;
  height: auto;
  min-height: 400px;
  margin: 100px auto;
  padding: ${theme.spacing.ls};
  background-color: ${theme.colors.primary};
  box-shadow: ${theme.shadows.card};
  border-radius: 16px;

  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const TodoInputBox = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const TodoInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 ${theme.spacing.md};
  background-color: ${theme.colors.secondaryDark};
  color: ${theme.colors.surface};
  border: none;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};
  outline: none;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const TodoAddButton = styled.button`
  width: 88px;
  padding: 0 ${theme.spacing.xs};
  font-size: 14px;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.surface};
  border: none;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};

  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const TodoLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const TodoItems = styled.li`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondaryDark};
  color: ${theme.colors.surface};
  border: none;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};

  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const DeleteButton = styled.button`
  width: 48px;
  padding: 0 ${theme.spacing.xs};
  font-size: 14px;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.surface};
  border: none;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};

  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [userInput, setUserInput] = useState("");

  const handleAdd = () => {
    if (!userInput.trim()) return;
    dispatch({ type: "ADD", payload: userInput });
    setUserInput("");
  };

  const inputValue = (e) => {
    setUserInput(e.target.value);
  };

  const toggleTodo = (todo) => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  const deleteTodo = (todo) => {
    if (confirm("정말 삭제할까요?")) {
      dispatch({ type: "DELETE", payload: todo.id });
    }
  };
  return (
    <TodoBox>
      <TodoInputBox>
        <TodoInput type="text" value={userInput} onChange={inputValue} />
        <TodoAddButton onClick={handleAdd}>추가하기</TodoAddButton>
      </TodoInputBox>
      <TodoLists>
        {todos.map((todo) => (
          <TodoItems key={todo.id}>
            <span
              onClick={() => toggleTodo(todo)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                width: "100%",
              }}
            >
              {todo.text}
            </span>
            <DeleteButton onClick={() => deleteTodo(todo)}>삭제</DeleteButton>
          </TodoItems>
        ))}
      </TodoLists>
    </TodoBox>
  );
}
