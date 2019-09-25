import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function MyBirthday() {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy&date=1995-09-25")
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setExplanation(res.data.explanation)
        setImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="image">
      <img className="image" src={image} alt="My Birthday" />
      <h2>{title}</h2>
      {/* Couldn't go back any further */}
      <p>Photo Taken on 1995-09-25</p>
      <p>{explanation}</p>
    </div>
  )
}