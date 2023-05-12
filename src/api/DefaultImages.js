// ./src/DefaultImages.js

const hatchBackURL =
  "https://content.tgstatic.co.nz/photos/good/2014-ford-focus-23409322_16480631.jpg";
const sedanURLImage =
  "https://content.tgstatic.co.nz/photos/good/2014-toyota-corolla-23466242_16512526.jpg";

const DefaultImages = [hatchBackURL, sedanURLImage];

const RandomImageUrl = () => {
  return DefaultImages[
    Math.floor(Math.random() * Math.floor(DefaultImages.length))
  ];
};

export default RandomImageUrl;
