import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useLocation } from "react-router-dom";

const PageHeader = styled.header`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  width: 100%;
  height: 60px;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondary};
  border-bottom: 1px solid ${theme.colors.border};
  border-top-right-radius: ${theme.borderRadius.md};
  border-top-left-radius: ${theme.borderRadius.md};
`;

const DotBox = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const RedDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: ${theme.borderRadius.round};
  background-color: #f87171;
`;
const YellowDot = styled(RedDot)`
  background-color: #facc15;
`;
const GreenDot = styled(RedDot)`
  background-color: #4ade80;
`;

const PageLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border};
  color: #93a3af;
  background-color: ${theme.colors.form};
`;

export default function Header() {
  const location = useLocation();
  return (
    <PageHeader>
      <DotBox>
        <RedDot></RedDot>
        <YellowDot></YellowDot>
        <GreenDot></GreenDot>
      </DotBox>
      <PageLink>현재 경로 : {location.pathname}</PageLink>
    </PageHeader>
  );
}
