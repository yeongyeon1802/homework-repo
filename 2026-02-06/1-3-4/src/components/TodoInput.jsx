export default function TodoInput({ inputText, setInputText, handleAdd }) {
  const inputValue = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="todo-input-box">
      <input
        className="todo-input"
        type="text"
        value={inputText}
        onChange={inputValue}
        placeholder="할 일을 입력하세요."
      />
      <button className="todo-add-button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}
