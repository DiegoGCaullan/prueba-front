import React from "react";

const MovieCard = ({ movie }) => {
  const actors = movie.actors.split(",");
  const directors = movie.director.split(",");
  const genre = movie.genre.split(",");

  return (
    <div className="col-md-4 ">
      <div className="card mb-4 shadow-sm movie-card">
        <img
          src={"http://localhost:3977/" + movie.image}
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title fs-3">{movie.title}</h5>
          <p className="card-text text-secondary">{movie.description}</p>
          <div className="additional-info">
            <p>
              <span className="fw-bold">Calificacion: </span>
              {movie.rating}/10
            </p>
            <p>
              <span className="fw-bold">Actores: </span>
              {actors.map((item) => (
                <span className=" text-secondary" key={item}>
                  {item}
                </span>
              ))}
            </p>
            <p>
              <span className="fw-bold">Directores: </span>
              {directors.map((item) => (
                <span className=" text-secondary" key={item}>
                  {item}
                </span>
              ))}
            </p>
            <p>
              <span className="fw-bold">Géneros: </span>
              {genre.map((item) => (
                <span className=" text-secondary" key={item}>
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
