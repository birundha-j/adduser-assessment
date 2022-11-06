import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Categories from "./pages/Categories";
import Logo from "./assets/images/logo.svg";
import HeaderLine from "./pages/headerLine";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <img src={Logo} alt="" />
        </Col>
        <Col xs={8}></Col>
      </Row>
      <Row>
        <HeaderLine />
      </Row>
      <Row>
        <Categories />
      </Row>
    </Container>
  );
}

export default App;
