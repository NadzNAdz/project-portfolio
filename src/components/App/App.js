import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import Hero from '../Hero';
import Grid from '../Grid';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
        <Grid />
      </Main>
    </>
  );
};

const HeroWrapper = styled.div`
  margin-bottom: 64px;
`;

const Main = styled.main`
  padding: 35px 34px;
`;

export default App;
