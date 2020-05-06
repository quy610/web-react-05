import React, { useState } from 'react';
import { Container, Row, Card, Button, Col, Form, FormControl } from 'react-bootstrap';

import '../../css/Product.css';

function Products() {
  const [products, setproducts] = useState([
    {
      title: "product 1",
      description: "product product product product"
    },
    {
      title: "product 2",
      description: "product product product product"
    },
    {
      title: "product 3",
      description: "product product product product"
    },
    {
      title: "product 4",
      description: "product product product product"
    },
    {
      title: "product 5",
      description: "product product product product"
    },
    {
      title: "product 6",
      description: "product product product product"
    },
    {
      title: "product 7",
      description: "product product product product"
    },
    {
      title: "product 8",
      description: "product product product product"
    },
    {
      title: "product 8",
      description: "product product product product"
    }
  ]);

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
                <Card.Text>
                  {item.description}
                </Card.Text>
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