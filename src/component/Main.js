import React, { useState, useRef } from "react";

import Buttons from "./Buttons";
import Display from "./Display";
import TextArea from "./TextArea";

//constext Hook.
export const mainContext = React.createContext();
//const contextProvider = mainContext.Provider;

//set for font color
const color_set = new Set();

color_set.add("purple");
color_set.add("pink");
color_set.add("white");
color_set.add("orange");
color_set.add("black");
color_set.add("lightgreen");

const Main = () => {
  //for font-size input.
  let font_ref = useRef(null);
  //for textarea
  const [inputText, setInputText] = useState("");
  //for displaying text
  let [d_text, setD_text] = useState(null);
  //flag for displaying text.
  const [flag, setFlag] = useState(false);
  //for font size
  const [fnt_size, setfnt_size] = useState(16);
  // for font-color array index.
  const [index, setindex] = useState(0);
  //converting set into array
  //note. here size of fnt_color is 4 coz size of set is starts from 1
  const fnt_color = [...color_set][index];

  const onClick = (arg) => {
    switch (arg) {
      case "upperCase":
        if (inputText !== "") {
          setFlag(true);
          setD_text(inputText.toUpperCase());
        } else {
          alert("please Enter the Text Above!");
        }
        break;
      case "lowerCase":
        if (inputText !== "") {
          setFlag(true);
          setD_text(inputText.toLowerCase());
        } else {
          alert("please Enter the Text Above!");
        }
        break;
      case "FontSize":
        return font_ref.current.value !== ""
          ? flag
            ? setfnt_size(font_ref.current.value)
            : alert("No Text to Change the size!")
          : alert("Enter the size First!");
      case "FontColor":
        //-1 is to manage the index value of array. with set's size.
        return flag
          ? index !== color_set.size - 1
            ? setindex((prev) => prev + 1)
            : setindex(0)
          : alert("No text to Change the Color!");
      case "default":
        return;
    }
  };
  // const demo=()=>{
  //   setFlag(true);

  // }
  const OnChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  console.log(flag);
  return (
    <div>
      <mainContext.Provider
        value={{
          value: inputText,
          onchange: OnChangeHandler,
          onClickHandler: onClick,
          flag: flag,
          txt: d_text,
          fnt_size: fnt_size,
          fnt_color: fnt_color,
          fnt_ref: font_ref,
        }}
      >
        <TextArea />
        <Buttons />
        <Display />
      </mainContext.Provider>
    </div>
  );
};

export default Main;
