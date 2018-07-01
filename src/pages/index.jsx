import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components';

import ContactBar from '../components/ContactBar'
import headshot from '../static/headshot.jpg'

const Page = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameHeader = styled.h1`
  margin-bottom: 10px;
`;

const RedTextSpan = styled.span`
  color: #e74c3c;
`;

const Image = styled.img`
  border-radius: 100%;
  height: ${props => props.size};
  width: ${props => props.size};
`;

const ShortBio = styled.div`
  font-family: 'Lato', 'Helvetica Neue';
  font-weight: 100;
  font-size: 19px;
`;

export default () => (
    <Page>
        <Main>
            <Image size="7em" src={headshot} />
            <NameHeader>ayush <RedTextSpan>singh</RedTextSpan></NameHeader>
            <ShortBio>software engineer | london | united kingdom</ShortBio>
            <ContactBar />
        </Main>
    </Page>
);