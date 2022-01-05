import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Card = ({
  slug,
  label,
  description,
}) => {
  return (
    <Wrapper>
        <ImageWrapper>
            <ImagePlaceHolder />
        </ImageWrapper>
        <Label>{label}</Label>
        <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const ImagePlaceHolder = styled.div`
    width: 100%;
    /* Set height equal to width */
    height: 0;
    padding-bottom: 100%;
    /* ==== */
    background-color: var(--color-secondary);
    border-radius: 25px;
`;

const Label = styled.h3`
  font-weight: ${WEIGHTS.bold};
  color: var(--color-primary);
`;

const Description = styled.p`
`;

export default Card;
