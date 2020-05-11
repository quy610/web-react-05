import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Card, Button, Col, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';

import '../../css/Product.css';

function Products() {
  const [products, setProducts] = useState([]);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    axios({
      method: 'get',
      url: 'https://server-restful-api-0610.herokuapp.com/books'
    })
    .then(res => {
      if(isMountedRef.current){
        setProducts(res.data);
      }
    })
    .catch(err => {
      console.log(err.response.data);
    })
    return () => isMountedRef.current = false;
  });

  return (
    <Container id="product">
      <Form inline className="justify-content-center">
        <FormControl type="text" placeholder="" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row>
        {products.map((item, index) => (
          <Col sm="4" key={index} className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://loremflickr.com/320/240" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text>
                  {item.description}
                </Card.Text> */}
                <Button variant="primary" >Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;