import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

const styling_prop = {
  margin: " 0 5px 3px 0",
};
const Buttons = (props) => {
  //destructing props
  const { onClickHandler, fnt_ref } = props;
  return (
    <div>
      <Button
        variant="primary"
        style={styling_prop}
        onClick={() => onClickHandler("upperCase")}
      >
        UpperCase
      </Button>
      <Button variant="success" onClick={() => onClickHandler("lowerCase")} style={styling_prop}>
        LowerCase
      </Button>

      <Form.Control
        ref={fnt_ref}
        as="input"
        type="number"
        className="sm container"
        style={{margin:"0 5px", width: "100px", display:"inline-block"}}
        placeholder="FontSize"
      />

      <Button variant="danger" onClick={() => onClickHandler("FontSize")} style={styling_prop}>
        Change Size
      </Button>
      <Button variant="danger" onClick={() => onClickHandler("FontColor")} style={styling_prop}>
        Change Color
      </Button>
    </div>
  );
};

export default Buttons;
