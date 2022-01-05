import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/about">about.</NavLink>
          <NavLink href="/work">work.</NavLink>
          <NavLink href="/contact">contact.</NavLink>
        </Nav>
        <Filler />
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: var(--color-background);
  width: 320px;
  height: 100%;
  padding: 32px;
  padding-left: 56px;
  display: flex;
  flex-direction: column;
  border-radius: 24px 0 0 24px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 8px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const NavLink = styled.a`
  font-size: 24px;
  font-weight: ${WEIGHTS.semiBold};
  color: var(--color-primary);
  text-decoration: none;
  width: fit-content;
  padding: 5px 16px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid var(--color-primary);
    border-radius: 8px;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
