import React from "react";

import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import WithParameters from "./components/basics/WithParameters";
import Challenge_RandomNumber from "./components/basics/Challenge_RandomNumber";

export default () => {
    return (
        <div id="app">
            <h1>Fundamentals React</h1>
            <p>Hello World!</p>
            <p><First></First></p>
            <WithParameters title="Second Component"
                            subtitle="Very cool!"
                            year={2020}></WithParameters>
            <Fragment></Fragment>
            <Challenge_RandomNumber min={1}
                                    max={60}></Challenge_RandomNumber>
        </div>
    );
};