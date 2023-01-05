import React,{useContext} from "react";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { mainContext } from "./Main";

const Display = (props) => {
  //using context
  const contextValue=useContext(mainContext);
  return (
    <div>
      <Card
        border=""
        className="container bg-success"
        style={{
          height: "auto",
          fontSize: `${contextValue.fnt_size}px`,
          color: `${contextValue.fnt_color}`,
          fontWeight: "bold",
        }}
      >
        <Card.Body>{contextValue.flag ? contextValue.txt : null}</Card.Body>
      </Card>
    </div>
  );
};

export default Display;
