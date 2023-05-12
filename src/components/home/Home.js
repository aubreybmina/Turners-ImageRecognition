import React from "react";
import { useState } from "react";
import SearchURL from "./SearchURL";
import SearchUpload from "./SearchUpload";
import Cars from "./Cars";

const Home = () => {
  const [cars, setCars] = useState("");

  function getSearchTerm(searchTerm) {
    setCars(searchTerm);
  }

  const DisplayCars = () => {
    if (cars !== undefined) {
      return <SearchCar />;
    }
    return <NoCars />;
  };

  const SearchCar = () => {
    return <Cars cars={cars} />;
  };

  const NoCars = () => {
    return <div>No cars to display.</div>;
  };

  return (
    <>
      <div className="home">
        <div className="home__taglinecontainer">
          <h1>We love buying cars!</h1>
          <p>Sell your car for cash today!</p>
        </div>
        <SearchURL search={getSearchTerm} />
        <SearchUpload search={getSearchTerm} />
      </div>
      {DisplayCars()}
    </>
  );
};

export default Home;
