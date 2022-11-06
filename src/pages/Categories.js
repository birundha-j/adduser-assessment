import React, { useEffect, useState } from "react";
import CardList from "../components/cardContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CategoryContainer } from "./pagesStyle";
import CustomButton from "../components/customButton";
import AccordionView from "../components/accordion";
import { getAllCategoryList } from "../redux/actions";

const Categories = () => {
  let dispatch = useDispatch();
  let addList = JSON.parse(localStorage.getItem("addList"));
  let localAlllist = JSON.parse(localStorage.getItem("allList"));

  const [addCategory, setAddCategory] = useState(addList || []);
  const [allCategoryList, setallCategoryList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { getCategoryList } = useSelector((state) => state?.category);

  useEffect(() => {
    dispatch(getAllCategoryList());
  }, []);

  useEffect(() => {
    if (localAlllist !== null) {
      setallCategoryList(localAlllist);
    } else {
      setallCategoryList(getCategoryList);
    }
  }, [getCategoryList]);

  useEffect(() => {}, [refresh]);

  const getCategory = (id, data) => {
    let obj = {};
    let list = allCategoryList;
    let currentlist = addCategory;
    let addList = [];

    let fetchuser = list.find((item) => {
      return item.categoryId === id;
    });

    obj.categoryId = fetchuser?.categoryId;
    obj.role = fetchuser?.role;
    obj.list = fetchuser?.list.filter((list) => {
      return list.userId === data.userId;
    });

    list.forEach((userlist, index) => {
      if (userlist.categoryId === id) {
        list[index] = {
          categoryId: userlist?.categoryId,
          role: userlist?.role,
          list: userlist.list.filter((emp) => {
            return emp.userId !== data.userId;
          }),
        };
      }
    });

    currentlist.find((user, index) => {
      if (user.categoryId === id) {
        obj.list = [...obj.list, ...user.list];
        addList[index] = obj;
        currentlist[index] = obj;
      }
    });
    if (addList.length === 0) {
      currentlist.push(obj);
    }
    setAddCategory(currentlist);
    setRefresh(!refresh);

    localStorage.setItem("allList", JSON.stringify(list));
    localStorage.setItem("addList", JSON.stringify(currentlist));
  };

  const removeItem = (id, data) => {
    let obj = {};
    let list = addCategory;
    let currentlist = allCategoryList;
    let addList = [];

    let fetchuser = list.find((item) => {
      return item.categoryId === id;
    });

    obj.categoryId = fetchuser?.categoryId;
    obj.role = fetchuser?.role;
    obj.list = fetchuser?.list.filter((list) => {
      return list.userId === data.userId;
    });

    list.forEach((userlist, index) => {
      if (userlist.categoryId === id) {
        list[index] = {
          categoryId: userlist?.categoryId,
          role: userlist?.role,
          list: userlist.list.filter((emp) => {
            return emp.userId !== data.userId;
          }),
        };
      }
    });

    currentlist.find((user, index) => {
      if (user.categoryId === id) {
        obj.list = [...obj.list, ...user.list];
        addList[index] = obj;
        currentlist[index] = obj;
      }
    });
    if (addList.length === 0) {
      currentlist.push(obj);
    }
    setAddCategory(list);
    setRefresh(!refresh);

    localStorage.setItem("allList", JSON.stringify(currentlist));
    localStorage.setItem("addList", JSON.stringify(list));
  };

  return (
    <CategoryContainer>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <Row>
              <Col xs={12} lg={6}>
                <div className="cardTitle">Categories</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={12} className="sideCard">
                <div className="subSideCard">
                  <AccordionView
                    accordionList={allCategoryList}
                    getCategory={(id, data) => getCategory(id, data)}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={6} lg={6}>
                <div className="cardTitle">Team Members</div>
              </Col>
              <Col xs={6} lg={6}>
                <div className="addNextBtn">
                  {" "}
                  <CustomButton btnName="Next" width={"40%"} />
                </div>
              </Col>
            </Row>
            <Row className="cardBetween">
              {addCategory.length > 0 &&
                addCategory?.map((item, index) => (
                  <>
                    {item.list.length > 0 && (
                      <Col
                        xs={12}
                        lg={6}
                        className={
                          index % 2 === 0 ? "cardRightBorder" : "cardLeftBorder"
                        }
                      >
                        <div className="subCard">
                          <CardList
                            categoryList={item}
                            removeItem={(id, data) => removeItem(id, data)}
                          />
                        </div>
                      </Col>
                    )}
                  </>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </CategoryContainer>
  );
};

export default Categories;
