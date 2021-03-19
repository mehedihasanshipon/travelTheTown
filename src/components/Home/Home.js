import React, { useEffect, useState } from 'react';
import header from '../../images/Bg.png';
import Rides from '../Rides/Rides';
import './Home.css';
import fakeData from '../../FakeData/HomeData.json'
const Home = () => {
    const [rides,setRides] = useState([]);
    useEffect(()=>{
        setRides(fakeData);
    },[])
    return (
        // style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${header})` }}
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