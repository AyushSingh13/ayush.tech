import React from "react";
import styled from "styled-components";

import NotesListPage from "../components/ui-components/NotesListPage";
import "prismjs/themes/prism-solarizedlight.css";

const RedTextSpan = styled.span`
  color: #e74c3c;
`;

const LayoutPage = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export default ({ children }) => (
  <LayoutPage>
    <Header>
      <h4>
        ayush<RedTextSpan>singh</RedTextSpan>
      </h4>
      <h4>about</h4>
    </Header>
    <NotesListPage>{children()}</NotesListPage>
  </LayoutPage>
);
