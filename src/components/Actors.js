import React from "react";
import { actors } from "../data";

function Actors() {
  const displayedActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie, id) => <li key={id}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    {displayedActors}
    </div>;
}

export default Actors;
