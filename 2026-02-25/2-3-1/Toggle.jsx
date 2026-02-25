import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState();
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <button
      onClick={handleToggle}
      style={{ backgroundColor: isOn ? "green" : "gray" }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
