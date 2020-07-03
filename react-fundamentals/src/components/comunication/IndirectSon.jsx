import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        Filho
      </div>
      <button onClick={
        (e) => {
          props.whenClicked('João', 53, true)
        }
      }>
        Set Information
      </button>
    </div>
  )
};