import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import CenteredModal from './CenteredModal';

import axios from 'axios';

import '../../css/RegisterForm.css';


const RegisterForm = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notifi, setNotifi] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = { email, name, password };
    // validateForm(infoUser);
    // if (error) return;

    axios({
      method: 'post',
      url: 'https://server-restful-api-0610.herokuapp.com/api/user/register',
      data: infoUser
    })
      .then(res => {
        setTitle('Success');
        setModalShow(true);
        setNotifi('You create an account successfully');
      })
      .catch(err => {
        setTitle('Fail');
        setModalShow(true);
        setNotifi(err.response.data);
      })
  }

  const validateForm = (user) => {
    if (user.email === '') {
      setError('No email');
    }

    if (user.name === '') {
      setName('No name');
    }

    if (user.password === '') {
      setPassword('No password');
    }
  }

  return (
    <Container>
      {notifi !== '' && (
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          message={notifi}
          title={title}
        ></CenteredModal>
      )}
      {error !== '' && (<Alert variant='danger'> {error} </Alert>)}
      <Form onSubmit={handleSubmit} className='register-form ml-auto mr-auto'>
        <Form.Group controlId="formRegisterEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formRegisterName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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