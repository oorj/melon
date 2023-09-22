import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import '../App.css'


const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([null])
  const getProductsDtail = async() => {
    let url = `http://localhost:5001/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    setProduct(data)
  }
  useEffect(() =>{
    getProductsDtail()
  }, [])

return (
  <>
    <Row className="product-detail">
      <Col className="productDetail-img">
        <img src={product?.img} alt="" />
      </Col>
      <Col>
        <div className="title"><span>제목</span>: {product?.title}</div>
        <div className="name">가수: {product?.name}</div>
        <div className="day">발매일: {product?.day}</div>
        <div className="company">발매사: {product?.company}</div>
        <div className="enter">기획사: {product?.enter}</div>
        <div className="text">앨범소개: {product?.text}</div>
       </Col>
    </Row>
  </>
);
}
export default ProductDetail