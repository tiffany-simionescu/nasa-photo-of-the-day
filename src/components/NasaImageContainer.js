import React from 'react';

export default function NasaImageContainer(props) {
  return(
    <div className="image-container">
      <img className="image" src={props.nasaImage} alt={props.alt} />
    </div>
  );
}