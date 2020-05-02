import React, { useContext } from "react";

import { SmurfsContext } from "../contexts/SmurfsContexts";

export default function SmurfList() {
  const { smurfs } = useContext(SmurfsContext);
  return (
    <div className="smurf-card">
      {smurfs.map(smurf => {
        return (
          <section className="smurf" key={smurf.id}>
            <h2>Name: {smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Heigh: {smurf.height}</p>
          </section>
        );
      })}
    </div>
  );
}
