import React from "react";
import "./App.css";
import NasaImage from '../src/components/NasaImage.js';

function App() {
//   // Step 3 - Fetching the Data 
//  const [nasaImage, setNasaImage] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//       .then(res => {
//         console.log(res);
//         // Step 4 - Adding the Data to State
//         setNasaImage(res.data.hdurl)})
//       .catch(err => console.log(err));
//   }, [])

  return (
    <div className="App">
      {/* Step 5 - Display the Data */}
      <NasaImage />
    </div>
  );
}

export default App;
