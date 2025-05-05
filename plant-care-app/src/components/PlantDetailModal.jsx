import React from 'react';

const PlantDetailModal = ({ plant, onClose }) => {
  if (!plant) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>Close</button>
        <h2>{plant.name}</h2>
        <p><em>{plant.scientificName}</em></p>
        <img src={plant.image} alt={plant.name} />
        <ul>
          <li><strong>Watering:</strong> {plant.wateringSchedule}</li>
          <li><strong>Light:</strong> {plant.lightRequirement}</li>
          <li><strong>Soil:</strong> {plant.soilType}</li>
          <li><strong>Temperature:</strong> {plant.temperatureRange}</li>
          <li><strong>Humidity:</strong> {plant.humidity}</li>
          <li><strong>Toxicity:</strong> {plant.toxicity}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlantDetailModal;
