import React from 'react';
import { useHistory } from 'react-router';
import './Rides.css';

const Rides = (props) => {
    // console.log(props.ride)
    const {title,imgUrl,rideType} = props.ride;
    const history = useHistory()
    const handleBook = (rideType) => {
        history.push(`/ride/${rideType}`);
    }
    return (
        <div className="col-md-6 col-lg-3 vd d-flex align-items-lg-center align-items-md-center align-items-sm-start">
            <div onClick={()=>handleBook(rideType)} className="ride d-flex justify-content-center align-items-center">
                <div className="">
                <img className="img-fluid" src={imgUrl} alt=""/>
                <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Rides;