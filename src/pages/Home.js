import React, { useState, useEffect } from "react";
import { getEncuestasFetch } from "../api/getEncuestasFetch";
import EncuestaCard from "../components/EncuestaCard";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    getEncuestasFetch()
      .then((data) => setEncuestas(data))
      .catch((error) => console.error("Error fetching encuestas:", error));
  }, []);

  console.log(encuestas);

  return (
    <>
      <div className="container my-5 text-center">
        <h2 className="mb-5 text-danger">
          Encuestas de los juegos mas populares
        </h2>
        <div className="row">
          {encuestas.map((encuesta) => (
            <EncuestaCard key={encuesta._id} encuesta={encuesta} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
