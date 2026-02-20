import SimpleMainPage from "../components/SimpleMainPage";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import { posts } from "../components/postData";

const PostTitle = styled.h2`
  width: 100%;
  font-size: 3rem;
  font-weight: 800;
  color: ${theme.colors.surface};
  border-bottom: ${theme.colors.border};
`;

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.ls};
  width: 100%;
  font-size: 18px;
  color: ${theme.colors.text};
`;

const PostItem = styled.li`
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.3s;
  cursor: pointer;

  &:hover {
    text-decoration-color: ${theme.colors.text};
  }
`;

const MainButton = styled(Link)`
  font-weight: 600;
  color: ${theme.colors.border};
  transition: color 0.3s;

  &:hover {
    color: #58677e;
  }
`;
export default function PostPage() {
  return (
    <SimpleMainPage>
      <PostTitle>✏️ 글 목록</PostTitle>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </PostItem>
        ))}
      </PostList>
      <MainButton to="/">홈으로</MainButton>
    </SimpleMainPage>
  );
}
