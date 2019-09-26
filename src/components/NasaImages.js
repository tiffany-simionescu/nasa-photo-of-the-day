import React, {useState, useEffect} from 'react';
import PhotoOfTheDay from "./PhotoOfTheDay.js";
import MyBirthday from './Stretch/MyBirthday.js';
import DougieBirthday from './Stretch/DougieBirthday.js';
import SophieBirthday from './Stretch/SophieBirthday.js';
import Dropdown from './Stretch/Dropdown.js';
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
      .get("https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy")
      .then(res => {
        console.log(res.data);
        // Step 4 - Adding the Data to State
        setNasaImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <Dropdown />
      <div className="image-container">
        <PhotoOfTheDay id="photo-of-the-day" />
      </div>
      <div className="image-container">
        <DougieBirthday id="dougie-birthday" />
      </div>
      <div className="image-container">
        <SophieBirthday id="sophie-birthday" />
      </div>
      <div className="image-container">
        <MyBirthday id="my-birthday" />
      </div>
    </div>
  );
}
