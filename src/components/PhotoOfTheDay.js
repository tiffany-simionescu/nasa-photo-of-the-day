import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PhotoOfTheDay() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy")
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setDate(res.data.date);
        setExplanation(res.data.explanation)
        setImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <img className="image" src={image} alt="Photo of the Day" />
      <h2>{title}</h2>
      <p>Photo Taken on {date}</p>
      <p>{explanation}</p>
    </div>
  )
}