import React from "react";
import Fragment from "./Fragment";

export default (props) => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min));
    return (
        <React.Fragment>
            <h2>Random Number:</h2>
            <p><strong>Min Value:</strong> { min } </p>
            <p><strong>Max Value:</strong> { max } </p>
            <h4>Random Number is {'>'} <strong>{ random }</strong> {'<'}</h4>
        </React.Fragment>
    );
};