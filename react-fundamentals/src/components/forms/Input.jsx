import React, { useState } from "react";

import './Input.css'

export default (props) => {
  const [value, setValue] = useState('Write here')

  function whenChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{value}</h2>
      <input value={value} onChange={whenChange}/>
      <input value='Read Only' readOnly/>
    </div>
  )
};