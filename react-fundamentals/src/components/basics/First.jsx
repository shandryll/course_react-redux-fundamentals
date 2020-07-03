import React from 'react';

export default function First() {
    const msg = 'Welcome!'
    return (
        <React.Fragment>
            <h2>First Component</h2>
            <p>{ msg }</p>
        </React.Fragment>
    );
};
