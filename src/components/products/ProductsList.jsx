import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { useState } from "react";
import { products } from "../../helper/data";



const ProductsList = ({selectedCategory}) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue)
  }
  


  return (
    <>
      
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleChange}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          <ProductCard input={input} selectedCategory={selectedCategory}/>
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;