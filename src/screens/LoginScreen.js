import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormComponent';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/MessageComponent';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    users.map(user =>
      user.email !== email
        ? setError('User Not Found')
        : user.password === password
        ? console.log('cool')
        : setError('Wrong Password')
    );
  };

  useEffect(() => {
    fetch(`http://localhost:3000/data/users.json`)
      .then(data => data.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <FormContainer>
      <h1 style={{ textAlign: 'center' }}>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='submitbtn'>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
