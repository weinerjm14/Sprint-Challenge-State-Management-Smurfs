import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { SmurfsContext } from "../contexts/SmurfsContexts";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

function App() {
  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        setSmurfs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <SmurfsContext.Provider value={{ smurfs, setSmurfs }}>
        <h1>Smurfs</h1>
        <SmurfList />
        <AddSmurfForm />
      </SmurfsContext.Provider>
    </div>
  );
}

export default App;
