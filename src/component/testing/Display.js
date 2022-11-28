// function Display({flag,txt}) {
//   return(
//     <div>
//       {/* <h2 dangerouslySetInnerHTML={{__html:txt}}></h2> */}
//       <h1>{flag?txt:"choose the option"}</h1>
//     </div>
//   )
// }

// export default Display

import React from "react";

import Card from "react-bootstrap/Card";
const obj=["red"];
const Display = ({flag,txt,check}) => {
  
  return (
    <div>
      <Card 
      border=""
      className="container bg-success"
      style={{height:"200px",color:`${check}`}}>
        <Card.Body>{flag?txt:"choose the option"}</Card.Body>
      </Card>
    </div>
  );
};

export default Display;
