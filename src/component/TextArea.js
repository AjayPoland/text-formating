import React,{useContext}from "react";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import { mainContext } from "./Main";

const TextArea = (props) => {
  //using context
  const contextValue=useContext(mainContext);
  return (
    <div>
      <Form.Control
        as="textarea"
        placeholder="Type your Text"
        className="mt-3 mb-3"
        style={{ height: "250px", width: "500px", margin: "auto" }}
        value={contextValue.value}
        onChange={contextValue.onchange}
      />
    </div>
  );
};

export default TextArea;
