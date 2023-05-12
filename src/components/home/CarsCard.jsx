import React from "react";
import { FaRoad } from "react-icons/fa";
import carDummy from "../../images/cars/cardummy.jpg";

const CarsCard = ({ car }) => {
  return (
    <>
      <div id={car.id} className="cars__card">
        <div className="cars__card--image">
          <img
            className="cars__card--photo"
            src={car.imageURL !== "N/A" ? car.imageURL : carDummy}
            alt={`${car.year} ${car.vehicle.toUpperCase()}`}
          />
          <div className="cars__card--image--carname">
            {`${car.year} ${car.vehicle.toUpperCase()}`}
          </div>
          <div className="cars__card--image--status">
            {car.body.toUpperCase()}
          </div>
        </div>
        <div className="cars__card--text">
          <h3>Price: {car.price}</h3>
          <p>Location: {car.location}</p>
          <p>
            <FaRoad /> {car.odometer}
          </p>
        </div>
      </div>
    </>
  );
};

export default CarsCard;
