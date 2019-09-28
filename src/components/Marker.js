import React , {Fragment, useState} from "react";
import "../Marker.css";


const Marker = (props: any) => {
  const { color, name, id, restroom_type} = props;

    console.log(props)
    // renderColors = () =>{
    //   console.log(props)
      

  // const handleClick = (e) => {
    
  // }

  return (
    <div
      className="pin bounce"
      style={{ backgroundColor: color, cursor: "pointer", position:"absolute" , transform: 'translate(-50%, -50%)' }}
      title={props.text}
      onClick={e => {
        localStorage.restroom_id = props.restroom_id;
      }}
    >
      {props.text}
    </div>
  );
};

export default Marker;


// localStorage.restroom.id = restroom.id
        // history.push('/home')