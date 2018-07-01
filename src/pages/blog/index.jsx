import React from "react";
import styled from "styled-components";

const Page = styled.div`
  min-width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ data }) => (
  <Page>
    <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div>
        <h1>{`${node.frontmatter.title} - ${node.frontmatter.date}`}</h1>
      </div>
    )}
  </Page>
)

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