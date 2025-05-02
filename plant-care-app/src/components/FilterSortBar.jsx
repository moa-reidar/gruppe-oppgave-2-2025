import React from 'react';

const FilterSortBar = ({
  lightFilter,
  onLightFilterChange,
  wateringFilter,
  onWateringFilterChange,
  soilFilter,
  onSoilFilterChange,
  humidityFilter,
  onHumidityFilterChange,
  toxicityFilter,
  onToxicityFilterChange,
}) => {
  return (
    <section>
      <label>Light:</label>
      <select value={lightFilter} onChange={(e) => onLightFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Bright indirect">Bright indirect</option>
        <option value="Low to medium">Low to medium</option>
        <option value="Medium to bright indirect">Medium to bright indirect</option>
      </select>

      <label>Watering:</label>
      <select value={wateringFilter} onChange={(e) => onWateringFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Once a week">Once a week</option>
        <option value="Twice a week">Twice a week</option>
        <option value="Every 1-2 weeks">Every 1-2 weeks</option>
        <option value="Every 2 weeks">Every 2 weeks</option>
        <option value="Every 2-3 weeks">Every 2-3 weeks</option>
        <option value="Every 3 weeks">Every 3 weeks</option>
        <option value="Keep soil moist">Keep soil moist</option>
      </select>

      <label>Soil Type:</label>
      <select value={soilFilter} onChange={(e) => onSoilFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Well-draining">Well-draining</option>
        <option value="Peat-based">Peat-based</option>
        <option value="Sandy">Sandy</option>
        <option value="Loamy">Loamy</option>
        <option value="Rich, well-draining">Rich, well-draining</option>
      </select>

      <label>Humidity:</label>
      <select value={humidityFilter} onChange={(e) => onHumidityFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label>Toxicity:</label>
      <select value={toxicityFilter} onChange={(e) => onToxicityFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Toxic">Toxic</option>
        <option value="Toxic to pets">Toxic to pets</option>
        <option value="Mildly toxic">Mildly toxic</option>
        <option value="Non-toxic">Non-toxic</option>
      </select>
    </section>
  );
};

export default FilterSortBar;
