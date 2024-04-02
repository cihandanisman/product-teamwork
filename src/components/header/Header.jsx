import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Header.scss";
import { categories, products } from "../../helper/data";

export const Header = ({setSelectedCategory}) => {
  
  return (
    <Container className="header">
      <h1>Products List</h1>
      <p className="text-danger fs-2">Categories</p>
      <div className="btns justify-content-center flex-md-row">
        {categories.map((category, i) => (
          <Button key={i} onClick={()=>setSelectedCategory(category)}>{category}</Button>
        ))}
      </div>

    </Container>
  );
};
