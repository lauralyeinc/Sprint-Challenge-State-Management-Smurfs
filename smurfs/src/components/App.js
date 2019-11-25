import React, { useState, useEffect } from "react";
import axios from 'axios';
import SmurfForm from "./SmurfForm"; 
import SmurfList from "./SmurfList"; 

import { SmurfContext } from "../contexts/SmurfContext"; 
import "./App.css";


const App = () => {
  console.log("App.js"); 
  const [ smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")       // GET '/smurfs' 
    .then(res => {
      console.log(res); 
      // setSmurfs(res.data);
    })
    .catch(err =>  console.log(err));
  }, []); 

  const addSmurfs = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {})
      .catch(err => console.log(err));
  }; 

  const deleteSmurf = smurfID => {
    axios
    .delete('http://localhost:3333/smurfs/{smurfID}')
    .then(res => {
      console.log( 'deleted a Smurf');
      setSmurfs(res.data);
    })
    .catch(err => console.log(err));
  };


  return (
    <SmurfContext.Provider value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}>
      <div className="App">
        <h1> SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm /> 
          <SmurfList /> 
      </div>
    </SmurfContext.Provider>
  )
}

export default App;
