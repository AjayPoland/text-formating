import React, { useState, useReducer, useRef } from "react";
import Btn from "./Btn";
import Display from "./Display";
import Txt from "./Txt";
import Form from "react-bootstrap/Form";

function Test() {
  let input_field = useRef();
  const [inputText, setInputText] = useState(" ");
  let [d_text, setD_text] = useState("@@@");
  const [flag, setFlag] = useState(false);

  const onClick = (arg) => {
    setFlag(true);
    switch (arg) {
      case "upperCase":
        setD_text(inputText.toUpperCase());
        break;
      case "lowerCase":
        setD_text(inputText.toLowerCase());
        break;
      case "default":
        return;
    }
  };
  //console.log(d_text);
 
  const color_set=new Set();

  color_set.add("blue");
  color_set.add("red");
  color_set.add("white");
  color_set.add("gray");
  const [Count, setCount] = useState(0);
  //for accessing value one by one 
  //set has to converted into array.
  // conversion into array.

  const take=[...color_set][Count]

  const changeColor=()=>{
    (Count!==((take.length)-1))?(setCount(prv=>prv+1)):(setCount(0));
    console.log((take.length)-1);
  }
  const demo=()=>{
    alert("hi");
  }
  console.log(take);
  return (
    <div>
      <Txt
        e_ref={input_field}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> 
      <Btn onClickHandler={onClick} check={changeColor}/>
      <Display flag={flag} txt={d_text} check={take}/>
      <button onClick={demo}>Log me!</button>
    </div>
  );
}

export default Test;
