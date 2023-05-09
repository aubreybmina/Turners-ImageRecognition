import React from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import CarsCard from "./CarsCard";
import { getAllCars } from "../../services/CarDataService";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const response = await getAllCars();
        response.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCars(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      {cars?.length > 0 ? (
        <div className="cars">
          {cars.map((car) => (
            <CarsCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No properties found.</h2>
        </div>
      )}
    </>
  );
};

export default Home;
