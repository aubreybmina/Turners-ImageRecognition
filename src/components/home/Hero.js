import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { searchCars } from "../../services/CarDataService";

const Hero = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    search(searchTerm);
  };

  const search = async (searchTerm) => {
    let list = [];
    try {
      const response = await searchCars(searchTerm);
      response.forEach((doc) => {
        list.push(doc.data());
      });
      setCars(list);
      console.log(cars);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero">
      <div className="hero__taglinecontainer">
        <h1>We love buying cars!</h1>
        <p>Sell your car for cash today!</p>
      </div>
      <div className="hero__searchcontainer">
        <form className="hero__searchcontainer--form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search by model, make, body type, or image url"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="Submit">
            <FaSearch /> Search
          </button>
          {/* <FaSearch alt="search" onClick={() => searchcars(searchTerm)} /> */}
        </form>
      </div>
    </div>
  );
};

export default Hero;
