import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { mainContext } from "./Main";

const styling_prop = {
  margin: " 0 5px 3px 0",
};
const Buttons = (props) => {
  //using context
  const contextValue=useContext(mainContext);
  return (
    <div>
      <Button
        variant="primary"
        style={styling_prop}
        onClick={()=>contextValue.onClickHandler("upperCase")}
      >
        UpperCase
      </Button>
      <Button
        variant="success"
        onClick={()=>contextValue.onClickHandler("lowerCase")}
        style={styling_prop}
      >
        LowerCase
      </Button>

      <Form.Control
        ref={contextValue.fnt_ref}
        as="input"
        type="number"
        className="sm container"
        style={{ margin: "0 5px", width: "100px", display: "inline-block" }}
        placeholder="FontSize"
      />

      <Button
        variant="danger"
        onClick={()=>contextValue.onClickHandler("FontSize")}
        style={styling_prop}
      >
        Change Size
      </Button>
      <Button
        variant="danger"
        onClick={()=>contextValue.onClickHandler("FontColor")}
        style={styling_prop}
      >
        Change Color
      </Button>
    </div>
  );
};

export default Buttons;
