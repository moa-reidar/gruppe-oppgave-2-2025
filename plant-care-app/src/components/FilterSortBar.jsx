import React from 'react';

const FilterSortBar = ({ lightFilter, onLightFilterChange }) => {
  return (
    <section>
      <label htmlFor="light-filter">Light Requirement:</label>
      <select
        id="light-filter"
        value={lightFilter}
        onChange={(e) => onLightFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Bright indirect">Bright indirect</option>
        <option value="Low to medium">Low to medium</option>
        <option value="Medium to bright indirect">Medium to bright indirect</option>
      </select>
    </section>
  );
};

export default FilterSortBar;
