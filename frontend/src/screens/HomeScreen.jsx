import React from "react";
import products from "../product";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";

const HomeScreen = () => {
  return <>

        <h1>
            Latest Productssas
        </h1>
        <Row>
            {
                products.map((Product)=>{
                   
                    return <Col key={Product._id} sm={12} md={6} lg={4} xl={3}> <Products {...Product}/>  </Col>
                     
                })
            }
        </Row>
  </>;
};

export default HomeScreen;
