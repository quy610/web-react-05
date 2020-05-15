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
  const [error, setError] = useState({ email: '', name: '', password: '' });

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const handleSubmit = () => {
    if (validateForm()) {
      const infoUser = { email: email, name: name, password: password };
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
    } else {
      console.log('Invalid form');
    }
  }

  const validateForm = () => {
    if (validEmailRegex.test(email)) {
      setError(preState => {
        return { ...preState, email: '' };
      });
    } else {
      setError(preState => {
        return { ...preState, email: 'Email is not valid!' };
      });
    }

    if (name.length < 5) {
      setError(preState => {
        return { ...preState, name: 'Name must be 5 characters long!' };
      });
    } else {
      setError(preState => {
        return { ...preState, name: '' };
      });
    }

    if (password.length < 8) {
      setError(preState => {
        return { ...preState, password: 'Password must be 8 characters long!' };
      });
    } else {
      setError(preState => {
        return { ...preState, password: '' };
      });
    }

    if (email === '' || name === '' || password === '') {
      return false
    }
    return true;
  }

  return (
    <Container>
      {notifi !== '' &&
        <div>
          <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            message={notifi}
            title={title}
          ></CenteredModal>
        </div>
      }
      <Form className='register-form ml-auto mr-auto'>
        <Form.Group controlId="formRegisterEmail">
          <Form.Label>Your Email</Form.Label>
          {error.email.length > 0 && <p >{error.email}</p>}
          <Form.Control
            name="email"
            type="email"
            onChange= {(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRegisterName">
          <Form.Label>Your Name</Form.Label>
          {error.name.length > 0 && <p >{error.name}</p>}
          <Form.Control
            name="name"
            type="name"
            onChange= {(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          {error.password.length > 0 && <p >{error.password}</p>}
          <Form.Control
            name="password"
            type="password"
            onChange= {(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Sign Up
        </Button>

      </Form>
    </Container>
  );
}

export default RegisterForm;