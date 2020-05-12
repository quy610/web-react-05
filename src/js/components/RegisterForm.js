import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import CenteredModal from './CenteredModal';

import axios from 'axios';

import '../../css/RegisterForm.css';


const RegisterForm = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notifi, setNotifi] = useState('');
  const [modalShow, setModalShow] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = { email, name, password };
    axios({
      method: 'post',
      url: 'https://server-restful-api-0610.herokuapp.com/api/user/register',
      data: infoUser
    })
      .then(res => {
        setNotifi('Success');
        setModalShow(true);
      })
      .catch(err => {
        setNotifi('Error');
        setModalShow(true);
      })
  }

  return (
    <Container>
      {notifi !== '' ? (
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          message={notifi}
        ></CenteredModal>
       ) : (<div />)}
      <Form onSubmit={handleSubmit} className='register-form ml-auto mr-auto'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
      </Button>
      </Form>
    </Container>
  );
}

export default RegisterForm;