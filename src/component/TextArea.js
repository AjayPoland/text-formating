import React from "react";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

const TextArea = (props) => {
  //Destructing props
  const { value, onChange }=props
  return (
    <div>
      <Form.Control
        as="textarea"
        placeholder="Type your Text"
        className="mt-3 mb-3"
        style={{ height: "250px", width: "500px", margin: "auto" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
