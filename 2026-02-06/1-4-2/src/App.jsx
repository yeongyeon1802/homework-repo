import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [runningTime, setRunningTime] = useState(false);

  useEffect(() => {
    if (!runningTime) return;

    //그 후 1초마다 인터벌 진행
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, [runningTime]);

  return (
    <>
      <Timer
        time={time}
        runningTime={runningTime}
        setRunningTime={setRunningTime}
      />
    </>
  );
}

export default App;
