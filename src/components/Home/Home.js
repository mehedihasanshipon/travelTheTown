import React from 'react';
import header from '../../images/Bg.png';
import Rides from '../Rides/Rides';
import './Home.css';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
const Home = () => {
    const rides = [
        {
            title: 'BIKE',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: bike,
            bed: 1,
            capacity: 1,
            rideType: 'bike',
            avatar: 'S',
            price: 119
        },
        {
            title: 'CAR',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: car,
            bed: 1,
            capacity: 2,
            rideType: 'car',
            avatar: 'D',
            price: 149
        },
        {
            title: 'BUS',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: bus,
            bed: 2,
            capacity: 4,
            rideType: 'bus',
            avatar: 'F',
            price: 199
        },
        {
            title: 'TRAIN',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: train,
            bed: 2,
            capacity: 4,
            rideType: 'train',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${header})` }} className="header">

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