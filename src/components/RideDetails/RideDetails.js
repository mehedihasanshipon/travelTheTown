import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import map from "../../images/Map.png";
import MatchRides from "../MatchRides/MatchRides";
import "./RideDetails.css";
import FakeData from "../../FakeData/data.json";
import Map from "../Map/Map";

const RideDetails = () => {
  const { type } = useParams();
  const [rides, setRides] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const matchRides = FakeData.filter(
      (ride) => ride.category.toLowerCase() === type.toLowerCase()
    );
    setRides(matchRides);
  }, [type]);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-5">
          <div className="ride-info">
            {!search ? (
              <form>
                <div className="mb-3">
                  <label for="from" className="form-label">
                    Pick from{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="from"
                    aria-describedby="emailHelp"
                    placeholder="From"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label for="to" className="form-label">
                    Pick to
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="to"
                    aria-describedby="emailHelp"
                    placeholder="Destination"
                  ></input>
                </div>
              </form>
            ) : (
              <h6 className="text-center" style={{ color: "green" }}>
                Your available rides
              </h6>
            )}
            <button
              onClick={() => {
                setSearch(!search);
              }}
              className="search-btn"
            >
              Search
            </button>
            {search && rides.map((ride) => <MatchRides ride={ride} />)}
          </div>
        </div>
        <div className="col-md-7 d-flex justify-content-center">
          <div className="map">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
