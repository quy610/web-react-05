import React from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';

function Products() {
  const item = [
    {
      title: "product 1",
      description: "product product product product"
    }
  ]

  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://loremflickr.com/320/240" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Products;