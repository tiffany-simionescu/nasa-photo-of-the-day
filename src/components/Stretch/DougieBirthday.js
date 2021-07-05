import React from 'react';
import ImageContainer from '../ImageContainer';

export default function DougieBirthday() {
  return (
    <ImageContainer
        apiLink="https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy&date=2013-05-31"
        alt="Dougie's Birthday"
        date="2013-05-31" />
  );
}