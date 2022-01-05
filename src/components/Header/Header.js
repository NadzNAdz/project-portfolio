import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <Wrapper>
        <LogoWrapper>
            <Logo />
            <LogoLink href='/'>Nadia Hy</LogoLink>
        </LogoWrapper>
        <DesktopNav>
            <NavLink href="/about">about.</NavLink>
            <NavLink href="/work">work.</NavLink>
            <NavLink href="/contact">contact.</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </Wrapper>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const Wrapper = styled.header`
    display: flex;
    padding: 35px 60px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1312px;

    @media ${QUERIES.phoneAndSmaller} {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
  }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-secondary);
`;

const LogoLink = styled.a`
    text-decoration: none;
    color: var(--color-primary);
    font-weight: ${WEIGHTS.semiBold};
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 16px;
  margin-left: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: ${WEIGHTS.semiBold};
  color: var(--color-primary);
  text-decoration: none;
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
  }
`;

export default Header;
