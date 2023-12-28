import React, { useState, useEffect } from "react";
import { getMoviesFetch } from "./api/getMoviesFetch";
import MovieCard from "./components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesFetch()
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  console.log(movies);

  return (
    <>
      <div className="container my-5 text-center">
        <h2 className="mb-4 text-primary">Movies App</h2>
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
