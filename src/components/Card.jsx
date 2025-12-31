import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useGlobalReducer from "../hooks/useGlobalReducer";
import '../style/index.css';

function Card({ category, info, id }) {
  const { store, dispatch } = useGlobalReducer();


  const isFavorite = store.favoriteList.some(
    (fav) => fav.name === info.name && fav.resource === category
  );

  const addFavorite = () => {
    if (!isFavorite) {
      const newFavorite = {
        name: info.name,
        resource: category,
        uid: id,
        properties: info,
      };
      dispatch({ type: "ADD_FAVORITE", payload: newFavorite });
    }
  };

  const renderProperties = () => {
    switch (category) {
      case "character":
        return (
          <>
            <p>Altura: {info.height}</p>
            <p>Color de ojos: {info.eye_color}</p>
            <p>Género: {info.gender}</p>
            <p>Pelo: {info.hair_color}</p>
          </>
        );
      case "planet":
        return (
          <>
            <p>Población: {info.population}</p>
            <p>Clima: {info.climate}</p>
            <p>Terreno: {info.terrain}</p>
          </>
        );
      case "vehicle":
        return (
          <>
            <p>Modelo: {info.model}</p>
            <p>Fabricante: {info.manufacturer}</p>
            <p>Pasajeros: {info.passengers}</p>
          </>
        );
      default:
        return <p>Sin datos</p>;
    }
  };

  return (
    <div className="card-card">
      <div>
        <img
          src={info.img}
          className="img-fluid"
          alt="..."
          style={{ width: "auto", height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="card-body ">
        <h5 className="card-title">{info.name}</h5>
        <span className="card-text d-flex">
          <div>{renderProperties()}</div>
        </span>
      </div>

      <div className="card-body d-flex justify-content-between align-items-end ">
        <button
          className="btn btn-info"
          onClick={() => (window.location.href = `/${category}/${id}`)}
        >
          Leer Mas
        </button>

        <button
          className={`btn btn-white ${isFavorite ? "favorite-active" : ""}`}
          onClick={addFavorite}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: isFavorite ? "red" : "white" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Card;