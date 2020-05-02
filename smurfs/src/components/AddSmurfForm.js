import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddSmurfForm() {
  const [newSmurf, SetNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const postData = e => {
    e.preventdefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(function (response) {
        console.log("post", response);
      })
      .catch(function (error) {
        console.log("post", error);
      });
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
