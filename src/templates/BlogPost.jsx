import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  padding: 2rem;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.h5`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  margin: 0;
`;

export default ({ data }) => (
  <Page>
    <Post>
      <PostHeader>
        <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
        <PostDate>{data.markdownRemark.frontmatter.date}</PostDate>
      </PostHeader>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Post>
  </Page>
);

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
