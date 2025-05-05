import React from 'react';

const PlantCard = ({ name, image, onClick }) => {
  return (
    <div className="plant-card" onClick={onClick}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
};

export default PlantCard;
