import { useState } from "react";
import DarkMode from "./DarkMode";

export default function ProfileCard({ name, comment }) {
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(name);
  const [isDark, setIsDark] = useState(false);
  const [userComment, setUserComment] = useState(comment);

  const inputName = (e) => {
    setUserName(e.target.value);
  };
  const inputComment = (e) => {
    setUserComment(e.target.value);
  };
  const toggleEdit = () => {
    setEdit(!edit);
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "400px",
    height: "auto",
    padding: "20px",
    backgroundColor: isDark ? "#444" : "#fff",
    color: isDark ? "#fff" : "#000",
    borderRadius: "16px",
    border: isDark ? "1px solid #555" : "1px solid #ddd",
    transition: "all 0.3s ease-in-out",
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

  const formStyle = {
    width: "100%",
    height: "30px",
    backgroundColor: isDark ? "#222" : "#ddd",
    border: isDark ? "1px solid #ddd" : "1px solid #333",
    borderRadius: "4px",
    color: isDark ? "#fff" : "#000",
    transition: "all 0.3s ease-in-out",
    outline: "none",
  };

  const formGap = {
    marginBottom: "24px",
  };

  const buttonGap = {
    display: "flex",
    gap: "16px",
  };

  return (
    <div className="card" style={cardStyle}>
      <h2
        style={{ color: isDark ? "#fff" : "#000", transition: "all 0.3s ease" }}
      >
        {edit ? "수정 모드" : "조회 모드"}
      </h2>
      <hr />
      {edit ? (
        <>
          <div>
            <h3 style={formGap}>이름</h3>
            <input
              type="text"
              value={userName}
              onChange={inputName}
              style={formStyle}
            />
          </div>
          <div>
            <h3 style={formGap}>상태 메세지</h3>
            <input
              type="text"
              value={userComment}
              onChange={inputComment}
              style={formStyle}
            />
            {userComment.length > 20 && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "12px" }}>
                상태 메시지는 20글자 이내로 써주세요! ({userComment.length}/20)
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <h3 style={formGap}>이름</h3>
            <p>{userName}</p>
          </div>
          <div>
            <h3 style={formGap}>내용</h3>
            <p>{userComment}</p>
          </div>
        </>
      )}
      <hr />
      <div style={buttonGap}>
        <button type="button" onClick={toggleEdit} style={buttonStyle}>
          {edit ? "저장" : "편집"}
        </button>
        <DarkMode isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
}
