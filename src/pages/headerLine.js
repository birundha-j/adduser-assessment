import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { HeaderLineContainer } from "./pagesStyle";

const HeaderLine = () => {
  return (
    <HeaderLineContainer className="pb-5 pt-5">
      <Container>
        <Row>
          <Col xs={3} lg={2} className="createContent">
            <div className="infoSteps">
              <div className="tickView tick-Active">✓</div>
              <div className="stepView-active">Step 1</div>
              <div className="statusView-active">Create Project</div>
            </div>
          </Col>

          <Col xs={6} lg={8} className="betweenLine">
            <Row>
              <Col xs={4} lg={5} className="align-center">
                <div className="emptyLineActive"></div>
              </Col>
              <Col xs={4} lg={2} className="removePadding">
                <div className="infoSteps">
                  <div className="tickView tick-normal">✓</div>
                  <div className="stepView-active">Step 1</div>
                  <div className="statusView-active">Create Project</div>
                </div>
              </Col>
              <Col xs={4} lg={5} className="align-center">
                <div className="emptyLine"></div>
              </Col>
            </Row>
          </Col>
          <Col xs={3} lg={2}  className="previewContent">
            <div className="infoSteps">
              <div className="tickView tick-normal">✓</div>
              <div className="stepView-active">Step 1</div>
              <div className="statusView-active">Create Project</div>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderLineContainer>
  );
};

export default HeaderLine;
