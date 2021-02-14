import React from 'react';
import { useEffect,useState } from 'react';
import Header from '../components/HeaderComponent';
import Message from '../components/MessageComponent';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Table,Button,Row,Col,Form,ListGroupItem } from 'react-bootstrap';

//actions
import {getProducts} from '../actions/productActions'

const HomeScreen = ({history}) => {
    const [qty,setQty] = useState(1)
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const { loading: loadingProducts, error, productDetails } = products;


    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

    return (
      <>
        <Header />
        {loadingProducts ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover className='mt-3' responsive>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Price</th>
                <th>CTA</th>
              </tr>
            </thead>
            <tbody>
              {productDetails.map(product => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      className='productImage'
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        <i
                          style={{ color: '#f8e825' }}
                          className={
                            product.rating >= index + 1
                              ? 'fas fa-star'
                              : product.rating >= index + 0.5
                              ? 'fas fa-star-half-alt'
                              : 'far fa-star'
                          }
                        ></i>
                      </span>
                    ))}
                  </td>
                  <td>$ {product.price}</td>
                  <td>
             {product.countInStock > 0 ? (
                <ListGroupItem>
                  <Row>
                    <Col md={6} sm={12}>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={e => setQty(e.target.value)}
                        className='qtySelectBox'
                      >
                    {[...Array(product.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                      </Form.Control>
                    </Col>
                      <Col md={6} sm={12}>
                      <Button variant='light' onClick={()=>{history.push(`/cart/${product.id}?qty=${qty}`)}} ><i className="fas fa-cart-plus"></i></Button>
                      </Col>
                </Row>
                </ListGroupItem>
            )
                : <h4>Out of Stock</h4>
                }
                </td>
                </tr>
              )
            )
        }
                </tbody>
          </Table>
        )}
      </>
    );
};

export default HomeScreen;
