import styled from "styled-components";

const NotesListPage = styled.div`
  min-width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default NotesListPage;
