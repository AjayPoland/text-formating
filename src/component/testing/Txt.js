import React from 'react'

function Txt({value,onChange,e_ref}) {
  return (
    <div>
      <input ref={e_ref} value={value} onChange={onChange} placeholder="Enter the Text"/>
    </div>
  )
}

export default Txt
