import React from "react";
import { useState } from "react";
import { getPrediction } from "../../api/carsFinderAPI";
import { FaSearch } from "react-icons/fa";

const SearchUpload = (searchTerms) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageDisplay, setImageDisplay] = useState(null);
  const [term, setTerm] = useState("");
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
    setImageDisplay(URL.createObjectURL(event.target.files[0]));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    formData.append("image", imageFile);
    const predict = await getPrediction(formData);
    const prediction = getProbability(predict);
    searchTerms.search(prediction);
    setTerm(prediction);
  };

  function getProbability(json) {
    const predictions = json.predictions;
    const maxProbability = Math.max(
      ...predictions.map((prediction) => prediction.probability)
    );
    const prediction = predictions.find(
      (prediction) => prediction.probability === maxProbability
    );
    if (maxProbability >= 0.75) {
      return prediction.tagName;
    } else {
      return null;
    }
  }

  const CarImage = () => {
    if (term !== "") {
      return (
        <>
          <img src={imageDisplay} height="200" border="1" alt="Preview" />
          <p>Are you looking for a {term}?</p>
        </>
      );
    }
    return;
  };

  return (
    <div className="home__searchcontainer">
      <form className="home__searchcontainer--form" onSubmit={handleSubmit}>
        <input type="file" id="imageUpload" onChange={handleFileChange} />
        <button type="submit">
          <FaSearch /> Search
        </button>
      </form>
      {CarImage()}
    </div>
  );
};

export default SearchUpload;
