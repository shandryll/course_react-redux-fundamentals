import React from "react";

export default (props) => {
  return (
    <React.Fragment>
      <p>{ props.name } <strong>{props.lastname}</strong></p>
    </React.Fragment>
  );
};
