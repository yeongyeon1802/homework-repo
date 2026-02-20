import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../styles/theme";
import { posts } from "../components/postData";
import styled from "@emotion/styled";
import SimpleMainPage from "../components/SimpleMainPage";
import NotFoundPage from "../pages/NotFoundPage";

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const PostId = styled.p`
  padding: 3px 6px;
  color: #6b7280;
  border: 1px solid #6b7280;
  border-radius: ${theme.borderRadius.sm};
`;

const DetailTitle = styled.h2`
  color: ${theme.colors.surface};
  font-size: 3rem;
  font-weight: 800;
`;

const DetailDesc = styled.p`
  color: #9ca3af;
`;

const GoBackButton = styled.button`
  padding: 12px;
  color: ${theme.colors.surface};
  background-color: ${theme.colors.border};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  box-shadow: ${theme.shadows.card};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;
export default function DetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  //id값이 있는지 확인
  const postFilter = posts.filter((item) => item.id == id);

  //id값이 없을 경우 존재하지 않는 페이지로 이동
  if (!postFilter.length) return <NotFoundPage />;

  return (
    <SimpleMainPage>
      {postFilter.map((post) => (
        <DetailBox key={post.id}>
          <PostId>Post ID: {post.id}</PostId>
          <DetailTitle>{post.title}</DetailTitle>
          <DetailDesc>{post.content}</DetailDesc>
          <GoBackButton onClick={goBack}>&lt; 목록으로 돌아가기</GoBackButton>
        </DetailBox>
      ))}
    </SimpleMainPage>
  );
}
