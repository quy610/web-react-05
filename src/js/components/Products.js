import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Card, Button, Col, Form, FormControl } from 'react-bootstrap';

import { WaveLoading, DiamonLoading, TransverseLoading } from 'react-loadingg';
import axios from 'axios';

import '../../css/Product.css';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const isMountedRef = useRef(null);
  const [load, setLoad] = useState(true);
  const [keySearch, setKeySearch] = useState('');

  useEffect(() => {
    isMountedRef.current = true;
    axios({
      method: 'get',
      url: 'https://server-restful-api-0610.herokuapp.com/books'
    })
      .then(res => {
        if (isMountedRef.current) {
          setAllProducts(res.data);
          setProducts(res.data);
          setLoad(false);
        }
      })
      .catch(err => {
        console.log(err.response.data);
      })
      return () => isMountedRef.current = false;
  }, []);

  const onChange = (e) => {
    setKeySearch(e.target.value);
  }

  const onSearchProduct = () => {
    if (keySearch === '') {
      setProducts([...allProducts]);
    } else {
      setProducts(allProducts.filter( p => {
        return p.title.toLowerCase().includes(keySearch.toLowerCase());
      }));
    }
  }

  return (
    <Container id="product">
      { load && ( <div><TransverseLoading /></div> )}
      { !load && (
        <div>
          <Form inline className="justify-content-center">
            <FormControl 
            type="text" 
            placeholder="" 
            className="mr-sm-2"
            onChange={onChange}
            />
            <Button variant="outline-success" onClick={onSearchProduct}>Search</Button>
          </Form>
          <Row>
            {products.map((item, index) => (
              <Col sm="4" key={index} className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://loremflickr.com/320/240" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="primary" >Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container >
  );
}

export default Products;