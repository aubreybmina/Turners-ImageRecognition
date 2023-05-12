export const getPrediction = async (image) => {
  return await getPredictionFetch(image);
};

export const getPredictionFetch = async (image) => {
  const response = await fetch(process.env.REACT_APP_CUSTOM_VISION_URL, {
    method: "POST",
    body: image,
    headers: {
      "Prediction-Key": process.env.REACT_APP_CUSTOM_VISION_KEY,
    },
  });
  return await response.json();
};
