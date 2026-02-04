import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";
import "./index.css";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "linear-gradient(to right, #e0c3fc 0%, #8ec5fc 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProfileCard name="철수" age={20} job="학생" />
          <ProfileCard name="영희" age={24} job="개발자" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <Post author="철수" content="저는 학생입니다." />
          <Post author="영희" content="저는 개발자 입니다." />
        </div>
      </div>
    </>
  );
}

export default App;
