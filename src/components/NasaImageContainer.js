import React from 'react';

export default function NasaImageContainer(props) {
  return(
    <div className="image-container">
      <img className="image" src={props.src} alt={props.alt} />
    </div>
  );
}