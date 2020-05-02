import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./App.css";
import { SmurfsContext, AddSmurfsContext } from "../contexts/SmurfsContexts";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

function App() {
  const [smurfs, setSmurfs] = useState([]);
  const { newSmurf, SetNewSmurf } = useContext(AddSmurfsContext);
  const postData = e => {
    e.preventdefault();
    setSmurfs({
      ...smurfs,
      newSmurf,
    });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(function (response) {
        console.log("post", response);
      })
      .catch(function (error) {
        console.log("post", error);
      });
  };
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
      <SmurfsContext.Provider value={{ smurfs, setSmurfs, postData }}>
        <AddSmurfsContext.Provider value={{ newSmurf, SetNewSmurf }}>
          <h1>Smurfs</h1>
          <SmurfList />
          <AddSmurfForm />
        </AddSmurfsContext.Provider>
      </SmurfsContext.Provider>
    </div>
  );
}

export default App;
