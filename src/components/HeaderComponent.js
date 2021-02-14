import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {useDispatch} from 'react-redux' 

//actions
import {logoutUser} from '../actions/userloginAction'


const Header = () => {
  const dispatch = useDispatch()

  const logoutHandler=()=>{
      dispatch(logoutUser())
  }

  return (
    <header style={{position:'sticky',top:'0',zIndex:'100'}}>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg' className='fixed-top'>
        <LinkContainer to='/home'>
          <Navbar.Brand>Super Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
           
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'> Cart</i>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
