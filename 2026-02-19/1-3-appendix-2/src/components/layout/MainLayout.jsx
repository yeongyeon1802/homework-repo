import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const LayoutConatiner = styled.div`
  background-color: ${theme.colors.textSecondary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainLayout({ children }) {
  return <LayoutConatiner>{children}</LayoutConatiner>;
}
