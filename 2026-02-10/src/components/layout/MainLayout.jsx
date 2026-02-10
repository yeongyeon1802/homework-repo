import styled from "@emotion/styled";

const LayoutConatiner = styled.div`
  background-color: #b8b8b8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainLayout({ children }) {
  return <LayoutConatiner>{children}</LayoutConatiner>;
}
