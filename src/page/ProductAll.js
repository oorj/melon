import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setquery] = useSearchParams();
    const getProducts = async() => {
        let searchQuery=query.get('q')||"";
        let url = `http://localhost:5001/products/${searchQuery}`

        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
    }

    useEffect(() =>{
        getProducts()
    },[query])

  return (
    <div>
      <Container>
        <Row>
            {
                productList.map((menu, idx) => (
                    <Col lg={3} key={idx}>
                        <ProductCard item={menu} />
                    </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll