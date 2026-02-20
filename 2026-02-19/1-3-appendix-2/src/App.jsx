import { GlobalStyle } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/posts/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
