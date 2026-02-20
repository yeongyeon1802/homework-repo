import SimpleMainPage from "../components/SimpleMainPage";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";

const MainIcon = styled.p`
  height: 50px;
  font-size: 3rem;
`;

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: ${theme.colors.surface};
`;

const PageListButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${theme.colors.button};
  color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};
  transition:
    box-shadow 0.3s,
    background-color 0.3s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
    background-color: ${theme.colors.buttonhover};
  }
`;
export default function HomePage() {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate("/posts");
  };
  return (
    <SimpleMainPage>
      <MainIcon>🏠</MainIcon>
      <PageTitle>미니 블로그 홈</PageTitle>
      <PageListButton type="button" onClick={goToPost}>
        글 목록 보러가기
      </PageListButton>
    </SimpleMainPage>
  );
}
