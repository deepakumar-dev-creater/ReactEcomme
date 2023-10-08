import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Fotter = () => {
  const curretYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Deepak Store &copy; {curretYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Fotter;
