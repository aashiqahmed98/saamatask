import React from 'react';
import { useEffect } from 'react';
import Header from '../components/HeaderComponent';
import Message from '../components/MessageComponent';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Table,Button } from 'react-bootstrap';

//actions
import {getProducts} from '../actions/productActions'

const HomeScreen = ({history}) => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products);
  const { loading: loadingProducts, error, productDetails } = products;

  const user = useSelector(state => state.userLogin);
  const {  isLogOut  } = user;

  // to check if user loggedout and then fetching products
  useEffect(() => {    
    if (isLogOut) {
        history.push(`/`)
    }else{
        dispatch(getProducts());
    }
  }, [isLogOut,history,dispatch]);


  return (
    <>
      <Header />
      {loadingProducts ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table bordered className='mt-3 border border-dark producttable' responsive>
          <thead className='bg-info text-white'>
            <tr className='text-center font-weight-bold'>
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
                <td className='text-center'>
                  <img
                    src={product.image}
                    className='productImage rounded shadow-sm'
                    alt={product.name}
                  />
                </td>
                <td className='text-center'>
                    <p>{product.name}
                    </p>
                </td>
                <td className='text-center'>
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
                <td className='text-center'>₹ {product.price}</td>
                <td  className='text-center'>
                  {product.countInStock > 0 ? (
                    <Button
                      variant='primary'
                      onClick={() => {
                        history.push(`/cart/${product.id}?qty=1`);
                      }}
                    >
                      <i className='fas fa-cart-plus'></i> {''}
                      <span>BUY NOW</span>
                    </Button>
                  ) : (
                    <h4 className='alert alert-danger text-center small'>Out of Stock</h4>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default HomeScreen;
