import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { SmurfsContext } from "../contexts/SmurfsContexts";
//use setsmurf from SC to send data--- use handlechanges with spread to setnewSmurf, onsub....use setsmurf to send newsmurf
export default function AddSmurfForm() {
  const { smurfs, setSmurfs } = useContext(SmurfsContext);
  const [newSmurf, SetNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const postData = e => {
    e.preventdefault();
    setSmurfs({
      ...smurfs,
      newSmurf,
    });
    console.log(smurfs);
    // axios
    //   .post("http://localhost:3333/smurfs", { ...newSmurf })
    //   .then(response => console.log("post", response))
    //   .catch(error => console.log("post", error));
    return false;
  };

  const handleChanges = e => {
    SetNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="Form">
      <form onSubmit={postData}>
        <h3>Add Smurf</h3>
        <label>Name:</label>
        <input name="name" onChange={handleChanges}></input>
        <label>Height:</label>
        <input name="height" onChange={handleChanges}></input>
        <label>Age:</label>
        <input name="age" onChange={handleChanges}></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
