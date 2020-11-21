import React from 'react';

import { Container, Logo } from './styles';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="DevRadar"/>
    </Container>
  );
}

export default Header;