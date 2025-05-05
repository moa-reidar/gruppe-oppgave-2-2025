import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ plants, onPlantClick }) => {
  return (
    <section>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          onClick={() => onPlantClick(plant)} // sender med hele planten
        />
      ))}
    </section>
  );
};

export default PlantList;
