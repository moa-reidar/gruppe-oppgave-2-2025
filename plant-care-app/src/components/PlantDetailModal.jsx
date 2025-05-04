import React from 'react';

const PlantDetailModal = ({ plant, closeModal }) => {
  if (plant === null) {
    return;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{plant.name}</h2>
        <p><i>{plant.scientificName}</i></p>
        <img src={plant.image} />
        <ul>
          <li><b>Water:</b> {plant.water}</li>
          <li><b>Light:</b> {plant.light}</li>
          <li><b>Soil:</b> {plant.soil}</li>
          <li><b>Temp:</b> {plant.temp}</li>
          <li><b>Humidity:</b> {plant.humidity}</li>
          <li><b>Toxic?</b> {plant.toxic}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlantDetailModal;
