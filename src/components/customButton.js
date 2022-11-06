import React from "react";
import { Button } from "react-bootstrap";
import { DynButton } from "./commonStyle";

const CustomButton = ({ btnName, addbtn, width, onClick }) => {
  return (
    <DynButton>
      <Button
        className={addbtn ? "smallButton" : "btnContainer"}
        style={{ width: width }}
        onClick={onClick}
      >
        {btnName}
      </Button>
    </DynButton>
  );
};

export default CustomButton;
