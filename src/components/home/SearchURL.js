import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  computerVision,
  isConfigured as ComputerVisionIsConfigured,
} from "../../api/ImageSearch";

const SearchURL = (searchTerms) => {
  const [fileSelected, setFileSelected] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFileSelected(e.target.value);
  };
  const onFileUrlEntered = (e) => {
    setFileSelected(searchTerm);
    setAnalysis(null);

    computerVision(fileSelected || null).then((item) => {
      setAnalysis(item);
      setFileSelected("");
    });
  };

  const DisplayResults = () => {
    return (
      <div>
        <h2>Computer Vision Analysis</h2>
        <div>
          <img
            src={analysis.URL}
            height="200"
            border="1"
            alt={
              analysis.description &&
              analysis.description.captions &&
              analysis.description.captions[0].text
                ? analysis.description.captions[0].text
                : "can't find caption"
            }
          />
        </div>
        <div>Are you looking for a {analysis.objects[0].object}?</div>
        {searchTerms.search(analysis.objects[0].object)}
      </div>
    );
  };

  const Analyze = () => {
    return (
      <>
        <div className="home__searchcontainer">
          <form className="home__searchcontainer--form">
            <input
              type="text"
              name="search"
              placeholder="Enter URL or body type"
              onChange={handleChange}
            ></input>
            <button onClick={onFileUrlEntered}>
              <FaSearch /> Search
            </button>
          </form>
        </div>
        {analysis && DisplayResults()}
      </>
    );
  };

  const CantAnalyze = () => {
    return (
      <div>
        Key and/or endpoint not configured in
        ./azure-cognitiveservices-computervision.js
      </div>
    );
  };

  function Render() {
    const ready = ComputerVisionIsConfigured();
    if (ready) {
      return <Analyze />;
    }
    return <CantAnalyze />;
  }

  return <div>{Render()}</div>;
};

export default SearchURL;
