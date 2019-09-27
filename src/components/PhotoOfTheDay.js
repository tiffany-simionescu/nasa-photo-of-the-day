import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Second Day Design using Reactstrap
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

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
    // First Day Design

    // <div>
    //   <img className="image" src={image} alt="Photo of the Day" />
    //   <h2>{title}</h2>
    //   <h4>Photo Taken on {date}</h4>
    //   <p>{explanation}</p>
    // </div>

    // Second Day Design using Reactstrap
    <Card className="image-container">
      <CardImg className="image" src={image} alt="Photo of the Day" />
        <CardBody>
          <CardTitle tag="h2">{title}</CardTitle>
          <CardSubtitle tag="h4">Photo Taken on {date}</CardSubtitle>
          <CardText>{explanation}</CardText>
        </CardBody>
    </Card>
  )
}