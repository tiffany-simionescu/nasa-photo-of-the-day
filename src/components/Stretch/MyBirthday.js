import React from 'react';
import ImageContainer from '../ImageContainer';

export default function MyBirthday() {
  return (
    <ImageContainer
        apiLink="https://api.nasa.gov/planetary/apod?api_key=RcNo8O73wAs0cUdX3H50E3rbIsZXLpa0kUNGKAhy&date=1995-09-25"
        alt="My Birthday"
        date="1995-09-25" />
  );
}