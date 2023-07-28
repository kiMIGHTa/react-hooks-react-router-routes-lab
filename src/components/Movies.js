import React from "react";
import { movies } from "../data";

function Movies() {
  const displayedMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
        {movie.genres.map((genre, id) => <li key={id}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {displayedMovies}
  </div>;
}

export default Movies;
