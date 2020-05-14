import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import CenteredModal from './CenteredModal';

import axios from 'axios';

import '../../css/LoginForm.css';


const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifi, setNotifi] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [signUp, setSignUp] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = { email, password };
    axios({
      method: 'post',
      url: 'https://server-restful-api-0610.herokuapp.com/api/user/login',
      data: infoUser
    })
      .then(res => {
        setNotifi('success');
        // setModalShow(true);
      })
      .catch(err => {
        setNotifi(err.response.data);
        setModalShow(true);
      })
  }

  if (notifi === 'success') {
    return <Redirect to='/product'></Redirect>;
  }

  if (signUp) {
    return <Redirect to='/register'></Redirect>;
  }

  return (
    <Container>
      {notifi !== '' && (
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          message={notifi}
          title={'Login Fail'}
        ></CenteredModal>
      )}
      <Form onSubmit={handleSubmit} className='login-form ml-auto mr-auto'>
        <Form.Group controlId="formloginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <span className="ml-5" onClick={() => setSignUp(true)}>
          Sign Up Now
        </span>
      </Form>
    </Container>
  );
}

export default LoginForm;