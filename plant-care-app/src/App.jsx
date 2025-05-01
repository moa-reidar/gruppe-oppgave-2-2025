import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterSortBar from './components/FilterSortBar';
import PlantList from './components/PlantList';
import AddPlantForm from './components/AddPlantForm';

const App = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Snake Plant",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Monstera",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Aloe Vera",
      image: "https://via.placeholder.com/150",
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <FilterSortBar />
        <PlantList plants={filteredPlants} />
        <AddPlantForm onAddPlant={handleAddPlant} />
      </main>
      <Footer />
    </>
  );
};

export default App;
