import TodoList from "./components/TodoList";
import MainLayout from "./components/layout/MainLayout";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <MainLayout>
      <GlobalStyle />
      <TodoList />
    </MainLayout>
  );
}

export default App;
