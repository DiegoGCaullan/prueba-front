import React from "react";
import { Link } from "react-router-dom";

const EncuestaCard = ({ encuesta }) => {
  return (
    <div className="col-md-4 ">
      <div className="card mb-4 shadow-sm encuesta-card">
        <img
          src={"http://localhost:3844/" + encuesta.image}
          alt={encuesta.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-name fs-3">{encuesta.name}</h5>
          <p>
            <span className="fw-bold">Categoria: </span>
            {encuesta.category}
          </p>
          <div className="additional-info">
            <p>
              <span className="fw-bold">{encuesta.description}</span>
            </p>
          </div>
          <div>
            <Link to={encuesta.url}>Ir a encuesta</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncuestaCard;
