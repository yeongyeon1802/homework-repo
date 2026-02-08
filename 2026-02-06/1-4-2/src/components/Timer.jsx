export default function Timer({ time, runningTime, setRunningTime }) {
  const toggleTimer = () => {
    setRunningTime((prev) => !prev);
  };
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={toggleTimer}>{runningTime ? "멈춤" : "시작"}</button>
      <p>{runningTime ? "타이머 작동 중" : "타이머 멈춤"}</p>
    </div>
  );
}
