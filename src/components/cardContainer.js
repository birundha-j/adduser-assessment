import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CardContainer,
  popupContent,
  popupCover,
  popupList,
} from "./commonStyle";
import CustomButton from "./customButton";
import { getImage } from "../assets/dummyJson";
import PopoverPositionedExample from "./popover";

const CardList = ({
  categoryList,
  btnEnable,
  hideHeader,
  getCategory,
  removeItem,
}) => {
  const [highExp, setHighExp] = useState();

  useEffect(() => {
    setHighExp(
      Math.max(...categoryList?.list.map((o) => Number(o.experience)))
    );
    console.log(
      Math.max(...categoryList?.list.map((o) => Number(o.experience))),
      "max"
    );
  }, [categoryList]);

  return (
    <CardContainer>
      {!hideHeader && <div className="cardHeader">{categoryList?.role}</div>}
      <Container className="listContent">
        {categoryList?.list?.map((user) => (
          <Row className="flex p-2 userList">
            <Col xs={3} lg={3} className="kingPosition">
              <img
                src={getImage(user?.profile)}
                alt=""
                className="profileImage"
              />
              {highExp === Number(user.experience) && <div className="kingIcon">♔</div>}
            </Col>
            <Col xs={6} lg={6} className="userDetails">
              <div className="userName">{user.name}</div>
              <div className="userExperience">{user.experience} yrs Exp</div>
            </Col>
            <Col xs={3} lg={3} className="menuIcon">
              {btnEnable ? (
                <CustomButton
                  btnName="Add"
                  addbtn
                  onClick={() => getCategory(categoryList.categoryId, user)}
                />
              ) : (
                <PopoverPositionedExample
                  placement={"bottom"}
                  content={
                    <div className="popupContainer" style={popupContent}>
                      <div style={popupCover}>
                        <div className="p-2">Lead</div>
                        <div
                          className="popList p-2"
                          style={popupList}
                          onClick={() =>
                            removeItem(categoryList.categoryId, user)
                          }
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </CardContainer>
  );
};

export default CardList;
