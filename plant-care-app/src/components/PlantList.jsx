import React from 'react';
import PlantCard from './PlantCard'; // vi bruker denne til å vise én plante

const PlantList = ({ plants }) => {
  return (
    <section>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
        />
      ))}
    </section>
  );
};

export default PlantList;
