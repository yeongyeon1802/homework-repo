import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 400px;
  height: auto;
  padding: 24px;
  background-color: #f8f9fa;
  border: 1px solid #333;
  border-radius: 16px;
`;

const CurrentTime = styled.h1`
  text-align: center;
`;

const StatusMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 48px;
`;

const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: #7fb3d5;
  border: 1px solid #333;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transform: scale(1);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #5d99c3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StopButton = styled(StartButton)`
  background-color: #e57373;

  &:hover {
    background-color: #d35d5d;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
const ResetButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  background-color: transparent;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function StopWatch({
  formatTime,
  status,
  timeStart,
  timeStop,
  timeReset,
}) {
  const getMessage = () => {
    switch (status) {
      case "running":
        return "Status: Running";
      case "stopped":
        return "Status: Stopped";
      case "reset":
        return "Status: Reset";
      default:
        return "Status: Ready";
    }
  };
  return (
    <Container>
      <CurrentTime>{formatTime}</CurrentTime>
      <StatusMessage>{getMessage()}</StatusMessage>
      <ButtonContainer>
        <StartButton onClick={timeStart}>Start</StartButton>
        <StopButton onClick={timeStop}>Stop</StopButton>
      </ButtonContainer>
      <ResetButton onClick={timeReset}>Reset Timer</ResetButton>
    </Container>
  );
}
