import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories, products } from "../../helper/data";

export const Header = () => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <p className="text-danger fs-2">Categories</p>
      <div className="btns justify-content-center flex-md-row">
        {categories.map((category, i) => (
          <Button>{category}</Button>
        ))}
      </div>

    </Container>
  );
};
