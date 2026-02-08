import { useState } from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (!inputText.trim()) return;
    const newTodos = { id: Date.now(), text: inputText };
    setTodos([...todos, newTodos]);
    setInputText("");
  };

  const handleDelete = (id) => {
    if (confirm("정말 삭제할까요?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <div className="container">
        <TodoInput
          inputText={inputText}
          setInputText={setInputText}
          handleAdd={handleAdd}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              {todo.text}
              <button
                className="todo-delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
