import React from 'react';
import './MatchRides.css'

const MatchRides = (props) => {
    const {name,passanger,bill,image} = props.ride
    return (
        <div className="rides-info">
            <img src={image} alt=""/>
            <h6> {name} </h6>
            <h6> {passanger} </h6>
            <h6> {bill} </h6>
        </div>
    );
};

export default MatchRides;