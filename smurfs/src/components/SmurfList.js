import React, { useContext } from 'react';
import { SmurfContext } from "../contexts/SmurfContext";

import Smurfs from "./Smurfs";

const SmurfList = () => {
    const { smurfs, deleteSmurf } = useContext(SmurfContext);

    return (
        <div className="SmurfList">
            {smurfs && smurfs.map(smurf => 
                <Smurfs key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} /> )}
        </div>
    );
};

export default SmurfList; 