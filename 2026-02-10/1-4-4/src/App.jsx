import useCounter from "./hooks/useCounter";
import MainLayout from "./components/layout/MainLayout";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 150px;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #333;
  border-radius: 16px;
`;

const Counter = styled.h2`
  font-size: 2.5rem;
`;

const CoutnerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Increment = styled.button`
  width: 60px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #b3e5fc;
  transform: scale(1);
  transition:
    transform 0.3s,
    background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #7695af;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Decrement = styled(Increment)`
  background-color: #ef9a9a;

  &:hover {
    background-color: #c67b7b;
  }
`;

const Reset = styled(Increment)`
  background-color: #c8e6c9;

  &:hover {
    background-color: #82946c;
  }
`;

function App() {
  const { count, increment, decrement, reset } = useCounter(0, {
    min: 0,
    max: 10,
  });

  return (
    <>
      <MainLayout>
        <Container>
          <Counter>{count}</Counter>
          <CoutnerButton>
            <Increment onClick={increment}>증가</Increment>
            <Decrement onClick={decrement}>감소</Decrement>
            <Reset onClick={reset}>초기화</Reset>
          </CoutnerButton>
        </Container>
      </MainLayout>
    </>
  );
}

export default App;
