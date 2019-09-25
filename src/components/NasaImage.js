import React, {useState, useEffect} from 'react';
import NasaImageContainer from "./NasaImageContainer.js";
import AboutImage from './AboutImage.js';
import axios from 'axios';

export default function NasaImage() {
  const [nasaImage, setNasaImage] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const imageOfTheDay = await Axios.get(
  //         "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  //       );
  //       setNasaImage(imageOfTheDay.data.hdurl);
  //       console.log(imageOfTheDay.data.hdurl);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

    useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res.data);
        // Step 4 - Adding the Data to State
        setNasaImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="image">
      <NasaImageContainer src={nasaImage} alt="Nasa Image of the Day" />
      <AboutImage />
    </div>
  );
}