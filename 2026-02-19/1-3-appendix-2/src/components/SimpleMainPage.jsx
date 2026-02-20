import styled from "@emotion/styled";
import Header from "./common/Header";
import { theme } from "../styles/theme";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
`;

const PageBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: ${theme.spacing.lg};
`;

export default function SimpleMainPage({ children }) {
  return (
    <PageContainer>
      <Header />
      <PageBox>{children}</PageBox>
    </PageContainer>
  );
}
