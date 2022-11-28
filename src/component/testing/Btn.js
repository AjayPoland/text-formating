import React from 'react'

function Btn({onClickHandler,check}) {
  return (
    <div>
      <button onClick={()=>onClickHandler("upperCase")}>Upper Case!</button>
      <button onClick={()=>onClickHandler("lowerCase")}>Lower Case!</button>
      <button onClick={check}>Check</button>
    </div>
  )
}

export default Btn
