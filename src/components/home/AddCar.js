import React, { useState } from "react";
import { addCar, searchCars } from "../../services/CarDataService";

const AddCar = () => {
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [body, setBody] = useState("");
  const [seats, setSeats] = useState("");
  const [colour, setColour] = useState("");
  const [transmission, setTransmission] = useState("");
  const [odometer, setOdometer] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCar = {
      vehicle: vehicle.toLowerCase(),
      brand: brand.toLowerCase(),
      model: model.toLowerCase(),
      year: year,
      body: body.toLowerCase(),
      seats: seats,
      colour: colour.toLowerCase(),
      transmission: transmission.toLowerCase(),
      odometer: odometer.toLowerCase(),
      price: price,
      location: location.toLowerCase(),
      imageURL: imageURL,
    };

    try {
      const car = await addCar(newCar);
      console.log("New Car Added!");
    } catch (err) {
      console.log(err);
    }
    setVehicle("");
    setBrand("");
    setModel("");
    setYear("");
    setBody("");
    setSeats("");
    setColour("");
    setTransmission("");
    setOdometer("");
    setImageURL("");
  };

  const allCars = async (e) => {
    const all = await searchCars();
    all.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
        <input
          type="text"
          placeholder="Colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
        <input
          type="text"
          placeholder="Transmission"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />
        <input
          type="text"
          placeholder="Odometer"
          value={odometer}
          onChange={(e) => setOdometer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="Submit">Submit</button>
      </form>
      <button onClick={allCars}>Submit</button>
    </div>
  );
};

export default AddCar;
