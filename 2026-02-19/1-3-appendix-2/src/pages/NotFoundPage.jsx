import styled from "@emotion/styled";
import SimpleMainPage from "../components/SimpleMainPage";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";

const NotFoundTitle = styled.h2`
  font-size: 36px;
  color: ${theme.colors.surface};
`;

const ButtonBox = styled.div`
  display: flex;
  gap: ${theme.spacing.ls};
`;

const GoMainButton = styled.button`
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

const GoBackButton = styled(GoMainButton)``;
export default function NotFoundPage() {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToBack = () => navigate(-1);
  return (
    <SimpleMainPage>
      <NotFoundTitle>존재하지 않는 페이지입니다!</NotFoundTitle>
      <ButtonBox>
        <GoMainButton type="button" onClick={goToHome}>
          홈으로 돌아가기
        </GoMainButton>
        <GoBackButton type="button" onClick={goToBack}>
          이전 페이지로 돌아가기
        </GoBackButton>
      </ButtonBox>
    </SimpleMainPage>
  );
}
