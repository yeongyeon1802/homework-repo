export default function DarkMode({ isDark, setIsDark }) {
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  const buttonStyle = {
    width: "50%",
    height: "30px",
    backgroundColor: isDark ? "#444" : "#fff",
    border: isDark ? "1px solid #ddd" : "1px solid #333",
    borderRadius: "10px",
    color: isDark ? "#fff" : "#000",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    outline: "none",
  };
  return (
    <button type="button" onClick={toggleDarkMode} style={buttonStyle}>
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
