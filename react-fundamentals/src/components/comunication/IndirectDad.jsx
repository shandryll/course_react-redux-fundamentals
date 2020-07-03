import React, { useState } from 'react';

import IndirectSon from './IndirectSon';

export default () => {
  const [name, setName] = useState('?');
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false)

  function setInformation(name, age, nerd) {
    setName(name)
    setAge(age)
    setNerd(nerd)
  }

  return (
    <div>
      <span>{ name } </span>
      <span>{ age } </span>
      <span>{ nerd ? 'Nerd' : 'Not Nerd' }</span>
      <IndirectSon whenClicked={setInformation}></IndirectSon>
    </div>
  )
};