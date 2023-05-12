import React from "react";
import { useEffect, useState } from "react";
import CarsCard from "./CarsCard";
import { searchCars, getAllCars } from "../../services/CarDataService";

const Cars = (car) => {
  const [cars, setCars] = useState([]);

  const searchCar = async (searchTerm) => {
    let list = [];
    try {
      const response = await searchCars(searchTerm);
      response.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setCars(list);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAll = async () => {
    let list = [];
    try {
      const response = await getAllCars();
      response.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setCars(list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    car.cars !== "" ? searchCar(car.cars) : fetchAll();
  }, []);

  return cars?.length > 0 ? (
    <div className="cars">
      {cars.map((car) => (
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  ) : (
    <div className="empty">
      <h2>No cars matched.</h2>
    </div>
  );
};

export default Cars;
