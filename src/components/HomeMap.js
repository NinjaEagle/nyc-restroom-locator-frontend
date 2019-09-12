import React, { Component, useState } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import mapStyles from "./mapStyles";

  function Map(props) {
    const [selectedSpot,setSelectedSpot] = useState(null);

    return (
      <GoogleMap
        defaultZoom={13.5}
        defaultCenter={{ lat: 40.700771, lng: -73.987411 }}
        defaultOptions={{ styles: mapStyles}}
      >
        {props.restrooms.map(restroom => (
          <Marker
            key={restroom.id}
            position={{
              lat: restroom.latitude,
              lng: restroom.longitude
            }}
            onClick={() => {
              setSelectedSpot(restroom);
            }}
            icon={{
              url: "/unisex.svg",
              scaledSize: new window.google.maps.Size(25, 25)
            }}
            animation={window.google.maps.Animation.DROP}
          />
        ))}

        {selectedSpot && (
          <InfoWindow
            visible={true}
            position={{
              lat: parseFloat(selectedSpot.latitude),
              lng: parseFloat(selectedSpot.longitude)
            }}
            onCloseClick={() => {
              setSelectedSpot(null);
            }}
          >
            <div>
              <h2>{selectedSpot.name}</h2>
              <p>{selectedSpot.address}</p>
              <p>Type: {selectedSpot.restroom_type}</p>
              <p>Wheelchair Accessible: {selectedSpot.wheelchair_accessible}</p>
              <p>Hours: {selectedSpot.start_time}-{selectedSpot.end_time}</p>
              <p>Save it to your favorites? <button onClick={() => {props.addFave(selectedSpot)}}>Yes!</button></p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
  );
  }


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function HomeMap(props){
  console.log(props) 
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7k7XnsI-2jwZs4DvwFyKqKCNEDtYElmg"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        restrooms={props.allRestrooms}
        addFave={props.addFave}
        hovered={props.hovered}
      />
    </div>
  );
}

// ${process.env.REACT_APP_GOOGLE_KEY}

  //  {selectedSpot && (
//             <InfoWindow
//             visible={true}
//             position={{lat:parseFloat(selectedSpot.lat),lng: parseFloat(selectedSpot.lng)}}
//             onCloseClick={() => {
//               setSelectedSpot(null);
//             }}
// >
//             <div className="map">
//             <h4 onClick={props.onClick}>{selectedSpot.name}</h4>
//             <h6>{selectedSpot.tag}</h6>
//             <img style={{width: 350, height: 300}} src={selectedSpot.img}/>
//             </div>
//             </InfoWindow>
//           )}




