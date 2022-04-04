import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/img.png';
import { Container } from './styles';

function Navbar() {
  return (

    <nav>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/">
          <h1>ITEGRAFLIX</h1>
        </Link>
      </Container>
    </nav>

  )
}

export default Navbar;