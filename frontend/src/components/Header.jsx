import React from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink href='/cart'>
                <FaShoppingCart className='' />
                Cart
              </NavLink>
              <NavLink href='/user'>
                <FaUser />
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
