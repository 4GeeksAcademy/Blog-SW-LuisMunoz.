import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/style/VehiclesDetails.css'
import vehicles from "../data/vehicles.json"

const VehiclesDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => setVehicle(data.result))
            .catch(error => console.log("ERROR AL CARGAR VEHÍCULO", error));
    }, [id]);

    if (!vehicle) return <p className="text-center mt-5">Cargando vehículo...</p>;

    const imageInfo = vehicles.find(img => img.uid === id);
    
const generatedDescription = `${vehicle.properties.name} is a representative vehicle in the Star Wars universe, 
  classified as a ${vehicle.properties.vehicle_class}. It was manufactured by ${vehicle.properties.manufacturer}, 
  one of the most important companies in galactic technology production.
  This vehicle has a length of ${vehicle.properties.length} meters and can transport up to ${vehicle.properties.passengers} passengers, 
  in addition to a crew of ${vehicle.properties.crew} members. 
  It has a cargo capacity of ${vehicle.properties.cargo_capacity} units, 
  making it a ${parseInt(vehicle.properties.cargo_capacity) > 500 ? "robust and versatile" : "light and maneuverable"} option.`;

  

    return (
        <div className="container mt-5">
            <div className="character-card d-flex">
                <img
                    src={imageInfo?.imgURL || "https://placehold.co/600x400?text=No+Image"}
                    alt={vehicle.properties.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{vehicle.properties.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>

            <ul className="vehicle-list mt-3">
                <li className="vehicle-item">
                    <h4>Consumables:</h4>
                    <span>{vehicle.properties.consumables}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Cargo Capacity:</h4>
                    <span>{vehicle.properties.cargo_capacity}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Passengers:</h4>
                    <span>{vehicle.properties.passengers}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Crew:</h4>
                    <span>{vehicle.properties.crew}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Length:</h4>
                    <span>{vehicle.properties.length}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Cost:</h4>
                    <span>{vehicle.properties.cost_in_credits}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Manufacturer:</h4>
                    <span>{vehicle.properties.manufacturer}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Vehicle Class:</h4>
                    <span>{vehicle.properties.vehicle_class}</span>
                </li>
            </ul>
        </div>
    );
};

export default VehiclesDetails;