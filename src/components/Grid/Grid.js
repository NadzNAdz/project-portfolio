import React from 'react';
import styled from 'styled-components/macro';

import CARDS from '../../data';
import Card from '../Card';

const Grid = () => {
  return (
    <Wrapper>
      {CARDS.map((card) => (
        <CardWrapper key={card.slug}>
          <Card {...card} />
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
`;

const CardWrapper = styled.div`
    min-width: 275px;
    max-width: 320px;
    flex: 1;
`;

export default Grid;
