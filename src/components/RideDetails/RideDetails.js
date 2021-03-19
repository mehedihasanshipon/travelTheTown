import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import map from "../../images/Map.png";
import MatchRides from "../MatchRides/MatchRides";
import "./RideDetails.css";
import FakeData from '../../FakeData/data.json';

// const allRides = [{name:'Hero',category:'bike'},{name:'Yamaha',category:'bike'},{name:'FZR',category:'bike'},
// {name:'Nokia',category:'car'},{name:'Samsung',category:'car'},{name:'Redmi',category:'car'},
// {name:'Canon',category:'bus'},{name:'Sony',category:'bus'},{name:'Nikkon',category:'bus'},
// {name:'Canon',category:'train'},{name:'Sony',category:'train'},{name:'Nikkon',category:'train'}]

const RideDetails = () => {
    // console.log(FakeData);

  const { type } = useParams();
  const [rides,setRides] = useState([]);
  const [search,setSearch] = useState(false);
  // console.log(rides);

  useEffect(()=>{
    const matchRides = FakeData.filter(ride => ride.category.toLowerCase() === type.toLowerCase());
    setRides(matchRides);
  },[type])


  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-5">
          <div className="ride-info">
            <form>
                <div className="mb-3">
                    <label for="from" className="form-label">Pick from </label>
                    <input type="email" className="form-control" id="from" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label for="to" className="form-label">Pick to</label>
                    <input type="email" className="form-control" id="to" aria-describedby="emailHelp"></input>
                </div>
            </form>
            <button onClick={()=>{setSearch(!search)}} className="search-btn">Search</button>
            {
                search && rides.map(ride=><MatchRides ride={ride} />)
            }
          </div>
        </div>
        <div className="col-md-7 d-flex justify-content-end">
          <div className="map">
            <img className="img-fluid h-100" src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
