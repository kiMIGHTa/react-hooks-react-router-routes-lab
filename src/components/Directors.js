import React from "react";
import { directors } from "../data";

function Directors() {
  const displayedDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          { director.movies.map((movie, id) => <li key={id}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  return <div>
    <h1>Directors Page</h1>
    {displayedDirectors}
  </div>;
}

export default Directors;
