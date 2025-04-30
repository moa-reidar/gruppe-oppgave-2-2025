import React from 'react';

const PlantCard = ({ name, image }) => {
  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PlantCard;
