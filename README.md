<!-- REFERENCES -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/aubreybmina/Turners-ImageRecognition.git">
    <img src="src/images/turnerscarslogo.png" alt="Logo" width="80">
  </a>

<h3 align="center">Turners Cars</h3>

  <p align="center">
    Image recognition for file upload and url input.
    <br />
    <a href="https://github.com/aubreybmina/Turners-ImageRecognition"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aubreybmina/Turners-ImageRecognition">View Demo</a>
    ·
    <a href="https://github.com/aubreybmina/Turners-ImageRecognition/issues">Report Bug</a>
    ·
    <a href="https://github.com/aubreybmina/Turners-ImageRecognition/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]

This project is an image recognition application that lets the user enter a URL or Upload an Image then search for similar cars from a Firebase Database. I used Cognitive Computer Vision for the URL image recognition and Custom Vision for the upload image recognition. I also used Sass for the styles. This is a school requirement.

### Built With

- [![React][React.js]][React-url]
- [![Sass][sass-lang.com]][Sass-url]
- [![Firebase][firebase.google.com]][Firebase-url]
- [![Azure][azure.microsoft.com]][Azure-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have Node.js installed in your computer. To check if you have it installed and see its version, type the following script in your Terminal

- npm
  ```sh
  node -v
  ```
  For url image recognition, you need to get your Cognitive Vision Key and Endpoint from Microsoft Azure by creating a computer vision resource [here](https://portal.azure.com/#create/Microsoft.CognitiveServicesComputerVision).

For image upload custom recognition, you need to create an account in customvision.ai then create a project so you can upload and train images. Once an training is done, an iteration result will come out then you'll get your custom vision key and url.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aubreybmina/Turners-ImageRecognition.git
   ```
2. Install the dependecies used using the following code

   ```sh
   npm init
   npm install
   ```

3. Create an account in Cognitive

   ```sh
   npm init
   npm install
   ```

4. Enter your KEYS and END_POINT in `.env`

   ```js
   # COMPUTER VISION
    REACT_APP_COMPUTER_VISION_KEY='YOUR KEY HERE'
    REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT='YOUR ENDPOINT HERE'

    # CUSTOM VISION
    REACT_APP_CUSTOM_VISION_KEY='YOUR KEY HERE'
    REACT_APP_CUSTOM_VISION_URL='YOUR ENDPOINT HERE'

    # FIREBASE
    REACT_APP_FIREBASE_KEY='YOUR ENDPOINT HERE'
    REACT_APP_AUTHDOMAIN='YOUR AUTHDOMAIN HERE'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

To run the project on your local desktop run the following script:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Aubrey Mina - aubreybmina@gmail.com

Project Link: [https://github.com/aubreybmina/Turners-ImageRecognition](https://github.com/aubreybmina/Turners-ImageRecognition)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/aubreybmina/Turners-ImageRecognition.svg?style=for-the-badge
[contributors-url]: https://github.com/aubreybmina/Turners-ImageRecognition/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aubreybmina/Turners-ImageRecognition.svg?style=for-the-badge
[forks-url]: https://github.com/aubreybmina/Turners-ImageRecognition/network/members
[stars-shield]: https://img.shields.io/github/stars/aubreybmina/Turners-ImageRecognition.svg?style=for-the-badge
[stars-url]: https://github.com/aubreybmina/Turners-ImageRecognition/stargazers
[issues-shield]: https://img.shields.io/github/issues/aubreybmina/Turners-ImageRecognition.svg?style=for-the-badge
[issues-url]: https://github.com/aubreybmina/Turners-ImageRecognition/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/aubrey-blancas/
[product-screenshot]: src/images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Sass-lang.com]: https://img.shields.io/badge/Sass-20232A?style=for-the-badge&logo=sass&logoColor=CF649A
[Sass-url]: https://sass-lang.com/
[firebase.google.com]: https://img.shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=FFCC31
[Firebase-url]: https://firebase.google.com/
[azure.microsoft.com]: https://img.shields.io/badge/Azure-20232A?style=for-the-badge&logo=azure&logoColor=34ADE6
[Azure-url]: https://azure.microsoft.com/en-us/
