import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

// const Page = styled.div`
//   min-width: 100vw;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

const PostList = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: inherit;

  cursor: pointer;
  padding: 0.5rem;
  transition: 0.1s all;

  &:hover {
    background-color: #2d3436;
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
  font-weight: 300;
  maring: 0;
`;

const PostExcerpt = styled.p`
  margin: 0;
`;

export default ({ data }) => (
  <PostList>
    <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostLink key={node.id} to={node.fields.slug}>
        <PostLinkHeader>
          <PostTitle>{node.frontmatter.title}</PostTitle>
          <PostDate>{node.frontmatter.date}</PostDate>
        </PostLinkHeader>
        <PostExcerpt>{node.excerpt}</PostExcerpt>
      </PostLink>
    ))}
  </PostList>
);

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
