import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/style/CharacterDetails.css'
import "../data/character.json"

const CharacterDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
            .then(res => res.json())
            .then(data => {
                setPerson(data);
            })
            .catch(error => console.log("ERROR AL CARGAR PERSONAJE", error));
    }, [id]);

    if (!person) return <p className="text-center mt-5">Cargando personaje...</p>;

const generatedDescription = `${person.name} is a prominent character in the vast Star Wars universe. 
  They have a height of approximately ${person.height} cm and a weight of ${person.mass} kg, 
  characteristics that may influence their physical performance within the galactic storyline. 
  Their gender is ${person.gender}, and they have a ${person.skinColor || "unknown"} skin tone, 
  which adds even more diversity to the species and cultures that inhabit this saga. 
  ${person.name.split(" ")[0]} comes from ${person.homeworld || "a planet whose origin remains a mystery"}, 
  adding a touch of intrigue to their personal story and background within the galaxy.`;

    
    return (
        <div className="container mt-5 ">
            <div className="character-card d-flex">
                <img
                    src={person.image}
                    alt={person.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{person.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>


            <ul className="character-list mt-3">
                <li className="character-item">
                    <h4>Height:</h4>
                    <span>{person.height}</span>
                </li>
                <li className="character-item">
                    <h4>Gender:</h4>
                    <span>{person.gender}</span>
                </li>
                <li className="character-item">
                    <h4>Birth Year:</h4>
                    <span>{person.birthYear || "Desconocido"}</span>
                </li>
                <li className="character-item">
                    <h4>Mass:</h4>
                    <span>{person.mass}</span>
                </li>
                <li className="character-item">
                    <h4>Skin Color:</h4>
                    <span>{person.skinColor || "Desconocido"}</span>
                </li>
                <li className="character-item">
                    <h4>Home World:</h4>
                    <span>{person.homeworld || "Desconocido"}</span>
                </li>
            </ul>
        </div>
    );
};

export default CharacterDetails;