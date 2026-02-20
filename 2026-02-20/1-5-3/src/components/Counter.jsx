import styled from "@emotion/styled";
import useCounterStore from "../stores/useCounterStore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 300px;
  height: 200px;
  margin: 300px auto;
  padding: 24px 16px;
  border-radius: 16px;
  background-color: #1e293b;

  h1 {
    font-size: 48px;
    text-align: center;
    color: #fff;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 8px;

  button {
    width: 60px;
    height: 40px;
    background-color: #2563eb;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    :hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    }
  }
`;

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <Container>
      <h1>{count}</h1>
      <ButtonBox>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>초기화</button>
      </ButtonBox>
    </Container>
  );
}
