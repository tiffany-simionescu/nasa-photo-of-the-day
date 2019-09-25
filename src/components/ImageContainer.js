import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ImageContainer(props) {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(props.apiLink)
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setExplanation(res.data.explanation)
        setImage(res.data.hdurl)})
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <img className="image" src={image} alt={props.alt} />
      <h2>{title}</h2>
      <p>Photo Taken on {props.date}</p>
      <p>{explanation}</p>
    </div>
  )
}