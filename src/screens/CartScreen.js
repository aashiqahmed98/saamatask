import React, { useEffect } from 'react';
import {
  Row,
  Image,
  ListGroup,
  Form,
  Button,
  Card,
  Col,
  Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Header from '../components/HeaderComponent';
import Message from '../components/MessageComponent'
import { useDispatch, useSelector } from 'react-redux';

//actions
import { addToCart,removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match,location }) => {
  const dispatch = useDispatch();

  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
};
const checkOutHandler=()=>{
    console.log('bought');
}

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId,qty));
    }
  }, [dispatch, productId,qty]);

  return (
    <>
      <Header />
      <Container>
          <Row>
            <Col md={8}>
              <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <Message>
                  Your Cart is Empty <Link to='/home'><span className='backLink'>Go Back</span></Link>
                </Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map(item => (
                    <ListGroup.Item key={item.id}>
                      <Row>
                        <Col md={2}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col md={3}>
                          {item.name}
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={3}>
                          <Form.Control
                            as='select'
                            value={item.qty}
                            className='qtySelectBox'
                            onChange={e =>
                              dispatch(
                                addToCart(item.id, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                        <Col md={2}>
                          <Button
                            type='button'
                            variant='light'
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>
                      Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      ) ITEMS
                    </h2>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn-block'
                      disabled={cartItems.length === 0}
                      onClick={checkOutHandler}
                    >
                      Buy
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
      </Container>
    </>
  );
};

export default CartScreen;
