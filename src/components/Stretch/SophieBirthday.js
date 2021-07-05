import React from 'react';
import ImageContainer from '../ImageContainer';

export default function SophieBirthday() {
  return (
    <ImageContainer
        apiLink="https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy&date=2016-07-30"
        alt="Sophie's Birthday"
        date="2016-07-30" />
  );
}