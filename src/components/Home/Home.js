import React, { useEffect, useState } from 'react';
import Rides from '../Rides/Rides';
import './Home.css';
import fakeData from '../../FakeData/HomeData.json'
const Home = () => {
    const [rides,setRides] = useState([]);
    useEffect(()=>{
        setRides(fakeData);
    },[])
    return (
        <div  className="banner">
            <div className="container">
                <div className="row align-items-center">
                    {
                        rides.map(ride=> <Rides ride={ride} ></Rides> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;