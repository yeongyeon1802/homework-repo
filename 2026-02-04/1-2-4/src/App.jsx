import ProfileCard from "./components/ProfileCard";
import "./index.css";

function App() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "32px",
          backgroundColor: "#222",
        }}
      >
        <ProfileCard name="" comment="" />
      </div>
    </>
  );
}

export default App;
