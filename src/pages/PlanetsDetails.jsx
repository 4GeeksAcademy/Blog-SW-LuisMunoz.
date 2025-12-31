import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/style/PlanetsDetails.css'
import planets from "../data/planets.json"

const PlanetsDetails = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => setPlanet(data.result))
            .catch(error => console.log("ERROR AL CARGAR EL PLANETA"))
    }, [id])

    if (!planet) return <p className="text-center mt-5">Cargando planeta...</p>;

    const imageInfo = planets.find(img => img.uid === id);

   const generatedDescription = `${planet.properties.name} is one of the fascinating worlds in the Star Wars universe. 
  With a predominantly ${planet.properties.climate} climate, this planet features landscapes characterized by ${planet.properties.terrain}. 
  It has a gravity of ${planet.properties.gravity}, a factor that directly influences the lifeforms that inhabit it. 
  Its diameter is ${planet.properties.diameter} km, and it completes a rotation in ${planet.properties.rotation_period} hours, 
  while its orbit around its star takes approximately ${planet.properties.orbital_period} days. 
  ${planet.properties.name} is home to a population of ${planet.properties.population !== "unknown" ? planet.properties.population : "uncertain origin"}, 
  making it a ${planet.properties.population !== "0" ? "populated" : "inhospitable"} place within this vast galaxy.`;



    return (<>
        <div className="container mt-5">
            <div className="character-card d-flex">
                <img
                    src={imageInfo?.imgURL || "https://placehold.co/600x400?text=No+Image"}
                    alt={planet.properties.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{planet.properties.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>

            <ul className="planet-list mt-3">
                <li className="planet-item">
                    <h4>Climate:</h4>
                    <span>{planet.properties.climate}</span>
                </li>
                <li className="planet-item">
                    <h4>Surface Water:</h4>
                    <span>{planet.properties.surface_water}</span>
                </li>
                <li className="planet-item">
                    <h4>Diameter:</h4>
                    <span>{planet.properties.diameter}</span>
                </li>
                <li className="planet-item">
                    <h4>Rotation Period:</h4>
                    <span>{planet.properties.rotation_period}</span>
                </li>
                <li className="planet-item">
                    <h4>Terrain:</h4>
                    <span>{planet.properties.terrain}</span>
                </li>
                <li className="planet-item">
                    <h4>Gravity:</h4>
                    <span>{planet.properties.gravity}</span>
                </li>
                <li className="planet-item">
                    <h4>Orbital Period:</h4>
                    <span>{planet.properties.orbital_period}</span>
                </li>
                <li className="planet-item">
                    <h4>Population:</h4>
                    <span>{planet.properties.population}</span>
                </li>
            </ul>

        </div>
    </>)
}

export default PlanetsDetails;