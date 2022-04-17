import React from 'react';
import { Badge, Container, FormControl, Nav, Navbar, Dropdown, } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import "./style.css"


const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height:80 }}>
      <Container>
          <Navbar.Brand>
              <a href='/'>Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl style={{ width: 500 }} placeholder='Search a Product' className='m-auto' />
          </Navbar.Text>
          <Nav>
            <Dropdown >
              <Dropdown.Toggle variant='secondary'>
                  <BsCart4 color='white' fontSize='25px' />
                  <Badge>{ 3 }</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370}}>
                <span style={{ padding: 10}}>Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header
