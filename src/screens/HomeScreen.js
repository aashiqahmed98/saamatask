import React from 'react';
import { useEffect } from 'react';
import Header from '../components/HeaderComponent';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/MessageComponent';
import Loader from '../components/Loader';

//actions
import {getProducts} from '../actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const { loading, error, productDetails } = products;

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

    return (
      <>
        <Header />
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <div>Home</div>
      </>
    );
};

export default HomeScreen;
