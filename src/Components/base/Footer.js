import React from 'react';
import { BiBookBookmark, BiTrendingUp, BiRun } from 'react-icons/bi';
import styled from 'styled-components';
import { CgGames } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <FooterContainer>
      <NavbarIcon to="/trend">
        <BiTrendingUp color="white" size={36} />
      </NavbarIcon>
      <NavbarIcon to="/curation/list">
        <BiRun color="white" size={36} />
      </NavbarIcon>
      <NavbarIcon to="/story/list">
        <BiBookBookmark color="white" size={36} />
      </NavbarIcon>
      <NavbarIcon to="/worldcup/setting">
        <CgGames color="white" size={36} />
      </NavbarIcon>
    </FooterContainer>
  );
};

const NavbarIcon = styled(NavLink)`
  &.active svg {
    color: black !important;
  }
`;

const FooterContainer = styled.nav`
  position: sticky;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 6.4rem;
  background-color: grey;
  justify-content: space-around;
  align-items: center;
`;
export default Footer;
