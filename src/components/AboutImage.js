import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AboutImage(props) {

  const [date, setDate] = useState('');
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date)
      .then(res => {
        console.log(res.data);
        setDate(res.data.date)
        setTitle(res.data.title)
        setExplanation(res.data.explanation)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="date">
      <h2>{title}</h2>
      <p>Photo Taken on {date}</p>
      <p>{explanation}</p>
    </div>
  )
}