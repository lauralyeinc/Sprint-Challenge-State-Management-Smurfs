import React from "react";

const Smurfs = props => {
    console.log(props);
    return (
        <div className="SmurfsCard">
            <h2>{props.smurf.name}</h2>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}> Kick Out of Village </button>
        </div>
    );
}; 

export default Smurfs; 