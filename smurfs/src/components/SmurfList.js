import React, { useContext } from 'react';
import { SmurfContext } from "../contexts/SmurfContext";

import Smurfs from "./Smurfs";

const SmurfList = props => {
    const { smurfs } = useContext(SmurfContext);

    return (
        <div className="SmurfList">
            {smurfs && smurfs.map(smurf => 
                <Smurfs key={smurf.id} smurf={smurf} /> )}
        </div>
    );
};

export default SmurfList; 