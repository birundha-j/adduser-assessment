import React from "react";
import { OverlayTrigger } from "react-bootstrap";

function PopoverPositionedExample({ placement, content }) {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}
        rootClose
        overlay={content}
      >
        <div>⋮</div>
      </OverlayTrigger>
    </>
  );
}

export default PopoverPositionedExample;
