import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  // Step 3 - Fetching the Data 
  const [nasaImage, setNasaImage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res);
        // Step 4 - Adding the Data to State
        setNasaImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* Step 5 - Display the Data */}
      <img src={nasaImage} alt="Nasa Image of the Day" />
    </div>
  );
}

export default App;
