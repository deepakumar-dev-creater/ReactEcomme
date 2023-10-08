import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";
const Products = (product) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>
        <Link to={`/product/${product._id}`}>
          <Card.Body>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Title as="div">
              <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
            </Card.Title>
            <Card.Text as="div">Rs{product.price}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
};

export default Products;
