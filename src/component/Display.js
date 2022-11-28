import React from "react";

import Card from "react-bootstrap/Card";

const Display = (props) => {
  //destructing.
  const { flag, txt, fnt_size, fnt_color } = props;
  return (
    <div>
      <Card
        border=""
        className="container bg-success"
        style={{
          height: "auto",
          fontSize: `${fnt_size}px`,
          color: `${fnt_color}`,
          fontWeight: "bold",
        }}
      >
        <Card.Body>{flag ? txt : null}</Card.Body>
      </Card>
    </div>
  );
};

export default Display;
