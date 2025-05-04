import React from 'react';

const PlantCard = ({ name, image }) => {
  return (
    <div className="plant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
};

export default PlantCard;

