import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Hero = () => {
  return (
    <Wrapper>
      <Title>Lorem Ipsum</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus non dolor non dapibus. Vivamus scelerisque justo id tempor accumsan. Quisque ut est a augue porttitor feugiat.
        Donec suscipit elementum ante at congue. Proin a blandit lorem. Maecenas id massa at tortor elementum dignissim dapibus nec nunc. Nulla eu libero at neque sagittis molestie.
      </Description>
      <Button></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: ${WEIGHTS.extraBold};
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
    max-width: 1000px;
`;

const Button = styled.div`
    width: 192px;
    height: 48px;
    background-color: var(--color-secondary);
    border-radius: 12.5px;
`;

export default Hero;
