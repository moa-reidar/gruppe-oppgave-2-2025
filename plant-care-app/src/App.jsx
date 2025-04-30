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

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };
  
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <FilterSortBar />
        <PlantList plants={plants} />
        <AddPlantForm onAddPlant={handleAddPlant} />
      </main>
      <Footer />
    </>
  );
};

export default App;

