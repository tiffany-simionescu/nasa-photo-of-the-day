import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Second Day Design using Reactstrap
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

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

    // First Day Design

    // <div>
    //   <img className="image" src={image} alt={props.alt} />
    //   <h2>{title}</h2>
    //   <p>Photo Taken on {props.date}</p>
    //   <p>{explanation}</p>
    // </div>

    // Second Day Design using Reactstrap
    <Card>
      <CardImg className="image" src={image} alt={props.alt} />
      <CardBody>
        <CardTitle tag="h2">{title}</CardTitle>
        <CardSubtitle>Photo Taken on {props.date}</CardSubtitle>
        <CardText>{explanation}</CardText>
      </CardBody>
    </Card>
  )
}