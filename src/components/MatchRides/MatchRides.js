import React from 'react';

const MatchRides = (props) => {
    const {name} = props.ride
    return (
        <div>
            <h4> {name} </h4>
        </div>
    );
};

export default MatchRides;