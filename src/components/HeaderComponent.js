import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';

const Header = ({ history }) => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>Super Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link>
              <i className='fas fa-shopping-cart'> Cart</i>
            </Nav.Link>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
