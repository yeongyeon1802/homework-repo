import { useState } from "react";
import "./App.css";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [heart, setHeart] = useState(0);

  const cardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const heartClick = (e) => {
    e.stopPropagation();
    setHeart((prev) => prev + 1);
  };

  const CardStyle = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" onClick={cardFlip} style={CardStyle}>
          <div className="front">
            <div>
              <h3>User Name</h3>
              <span>Frontend Dev</span>
            </div>
            <div className="button-box">
              <button
                type="button"
                className="heart-button"
                onClick={heartClick}
              >
                ♥ {heart}
              </button>
            </div>
          </div>
          <div className="back">
            <h3 className="back-title">My Skills</h3>
            <ul className="skill-list">
              <li className="skills">React</li>
              <li className="skills">Vue</li>
              <li className="skills">JS</li>
            </ul>
          </div>
        </div>
        <p>
          현재 상태 : {!isFlipped ? "앞면(Profile)" : "뒷면(Skills)"} |{" "}
          <span style={{ color: "#FF5252" }}>♥ {heart}</span>
        </p>
      </div>
    </>
  );
}

export default App;
