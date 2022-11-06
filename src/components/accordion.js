import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CardList from "./cardContainer";
import { AccordionContainer } from "./commonStyle";

const AccordionView = ({ accordionList, getCategory }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <AccordionContainer>
      <Accordion defaultActiveKey="0" onSelect={(e) => setActiveKey(e)}>
        {accordionList?.map((data, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <div className="subHeader">
                <div>{data.role}</div>
                <div className="roundIcon">
                  {activeKey === index ? <>-</> : <>+</>}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {data.list.length > 0 ? (
                <CardList
                  categoryList={data}
                  btnEnable
                  hideHeader
                  getCategory={(id, value) => getCategory(id, value)}
                />
              ) : (
                <div className="p-3 noDataFound">No data Found</div>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AccordionContainer>
  );
};

export default AccordionView;
