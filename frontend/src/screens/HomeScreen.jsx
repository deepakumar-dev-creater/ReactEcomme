import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios.get("/api/products");
      setProducts(data.data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Productssas</h1>
      <Row>
        {
        products.map((Product) => {
          return (
            <Col key={Product._id} sm={12} md={6} lg={4} xl={3}>
              {" "}
              <Products {...Product} />{" "}
            </Col>
          );
        }
        
        )
        // console.log(products)
        
        }
      </Row>
    </>
  );
};

export default HomeScreen;
