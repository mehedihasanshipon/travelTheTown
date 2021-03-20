import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap
  } from "react-google-maps";

 const ReactMap = ()=>{
     return(
        <GoogleMap defaultZoom={10}
        defaultCenter={{ lat: 45.4211, lng: -75.6903 }} />
     );
 }   
 const MapWrapped = withScriptjs(withGoogleMap(ReactMap));
const Map = () => {
    return (
        <div style={{ width: "45vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `90%` }} />}
                containerElement={<div style={{ height: `90%` }} />}
                mapElement={<div style={{ height: `90%` }} />}
            />
            </div>
    );
};

export default Map;