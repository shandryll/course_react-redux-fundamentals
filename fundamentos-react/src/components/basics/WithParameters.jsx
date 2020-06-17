import React from 'react';

export default function WithParameters(props) {
    const year = props.year == 2020 ? 'Present' : 'Past'
    return (
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.subtitle }</h3>
            <h3>Current year: { props.year } ~ { year }</h3>
        </div>
    );
};
