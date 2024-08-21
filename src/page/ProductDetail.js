import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sonjongmin1/jongmin-hnm-assignment/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail()
  },[])

  return <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img} alt='' /></Col>
      <Col>
      <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.choice === true ? "추천 상품" : ""}</div>
        <div>
          <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </Col>
  </Row>
  </Container>
}

export default ProductDetail