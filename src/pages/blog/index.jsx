import React from "react";
import styled from "styled-components";

const Page = styled.div`
  min-width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostList = styled.div`
  width: 50%;
`;

const PostLink = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.1s all;

  &:hover {
    background-color: #f5f6fa;
  }
`;

const PostCount = styled.h3`
  padding: 0.5rem;
`;

const PostLinkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const PostTitle = styled.h1`
  margin: 0;
`;

const PostDate = styled.h5`
  font-weight: 100;
  maring: 0;
  opacity: 0.7;
`;

const PostExcerpt = styled.p`
  margin: 0;
`;

export default ({ data }) => (
  <Page>
    <PostList>
      <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink key={node.id}>
          <PostLinkHeader>
            <PostTitle>{node.frontmatter.title}</PostTitle>
            <PostDate>{node.frontmatter.date}</PostDate>
          </PostLinkHeader>
          <PostExcerpt>{node.excerpt}</PostExcerpt>
        </PostLink>
      ))}
    </PostList>
  </Page>
);

export const query = graphql`
  query PostQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
