import React, {useState, useEffect} from 'react';
import NasaImageContainer from "./NasaImageContainer.js";
import Axios from 'axios';

export default function NasaImage() {
  const [nasaImage, setNasaImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const imageOfTheDay = await Axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        setNasaImage(imageOfTheDay.data.hdurl);
        console.log(imageOfTheDay.data.hdurl);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="image">
      <NasaImageContainer src={nasaImage} alt="Nasa Image of the Day" />
    </div>
  );
}