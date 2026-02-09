import { useState, useEffect, useRef } from "react";
import StopWatch from "./components/StopWatch";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("ready");
  const timeRef = useRef(null);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const cc = String(centiseconds).padStart(2, "0");

    return `${mm}:${ss}:${cc}`;
  };

  const timeStart = () => {
    if (timeRef.current) return;
    setStatus("running");
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const timeStop = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
      setStatus("stopped");
    }
  };

  const timeReset = () => {
    timeStop();
    setTime(0);
    setStatus("reset");
  };

  useEffect(() => {
    return () => timeStop();
  }, []);

  return (
    <>
      <MainLayout>
        <StopWatch
          formatTime={formatTime(time)}
          status={status}
          timeStart={timeStart}
          timeStop={timeStop}
          timeReset={timeReset}
        />
      </MainLayout>
    </>
  );
}

export default App;
