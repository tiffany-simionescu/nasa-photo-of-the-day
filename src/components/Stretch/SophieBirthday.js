import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function SophieBirthday() {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy&date=2016-07-30")
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setExplanation(res.data.explanation)
        setImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <img className="image" src={image} alt="Sophie's Birthday" />
      <h2>{title}</h2>
      <p>Photo Taken on 2016-07-30</p>
      <p>{explanation}</p>
    </div>
  )
}