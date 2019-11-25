import React, { useState, useEffect } from "react";
import axios from 'axios';
import SmurfForm from "./SmurfForm"; 

import { SmurfContext } from "../contexts/SmurfContext"; 
import "./App.css";


const App = () => {
  const [ smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:333/smurfs')       // GET '/smurfs' 
    .then(res => {
      console.log(res); 
      // setSmurfs(res.data);
    })
    .catch(err =>  console.log(err));
  }, []); 

  const addSmurfs = smurf => {
    axios.post('http://localhost:333/smurfs', smurf)
      .then(res => {})
      .catch(err => console.log(err));
  }; 


  return (
    <SmurfContext.Provider value={{ smurfs, setSmurfs, addSmurfs }}>
      <div className="App">
        <h1> SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm /> 
      </div>
    </SmurfContext.Provider>
  )
}

export default App;
