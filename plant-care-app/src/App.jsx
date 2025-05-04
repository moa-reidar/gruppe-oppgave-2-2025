import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterSortBar from './components/FilterSortBar';
import PlantList from './components/PlantList';
import AddPlantForm from './components/AddPlantForm';

import plant1 from './assets/image/plant 1.jpeg';
import plant2 from './assets/image/plant 2.jpeg';
import plant3 from './assets/image/plant 3.jpeg';
import plant4 from './assets/image/plant 4.jpeg';
import plant5 from './assets/image/plant 5.jpeg';
import plant6 from './assets/image/plant 6.jpeg';
import plant7 from './assets/image/plant 7.jpeg';
import plant8 from './assets/image/plant 8.jpeg';
import plant9 from './assets/image/plant 9.jpeg';
import plant10 from './assets/image/plant 10.jpeg';

const App = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      image: plant1,
      wateringSchedule: "Every 2 weeks",
      lightRequirement: "Low",
      soilType: "Well-draining",
      temperatureRange: "15-29°C",
      humidity: "Low",
      toxicity: "Toxic to pets",
    },
    {
      id: 2,
      name: "Monstera",
      scientificName: "Monstera deliciosa",
      image: plant2,
      wateringSchedule: "Once a week",
      lightRequirement: "Medium",
      soilType: "Peat-based",
      temperatureRange: "18-27°C",
      humidity: "High",
      toxicity: "Toxic to pets",
    },
    {
      id: 3,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      image: plant3,
      wateringSchedule: "Every 3 weeks",
      lightRequirement: "High",
      soilType: "Sandy",
      temperatureRange: "13-27°C",
      humidity: "Low",
      toxicity: "Mildly toxic",
    },
    {
      id: 4,
      name: "Peace Lily",
      scientificName: "Spathiphyllum wallisii",
      image: plant4,
      wateringSchedule: "Once a week",
      lightRequirement: "Low",
      soilType: "Loamy",
      temperatureRange: "18-26°C",
      humidity: "High",
      toxicity: "Toxic",
    },
    {
      id: 5,
      name: "ZZ Plant",
      scientificName: "Zamioculcas zamiifolia",
      image: plant5,
      wateringSchedule: "Every 2-3 weeks",
      lightRequirement: "Low",
      soilType: "Well-draining",
      temperatureRange: "15-30°C",
      humidity: "Medium",
      toxicity: "Toxic",
    },
    {
      id: 6,
      name: "Spider Plant",
      scientificName: "Chlorophytum comosum",
      image: plant6,
      wateringSchedule: "Twice a week",
      lightRequirement: "Medium",
      soilType: "Well-draining",
      temperatureRange: "13-27°C",
      humidity: "Medium",
      toxicity: "Non-toxic",
    },
    {
      id: 7,
      name: "Rubber Plant",
      scientificName: "Ficus elastica",
      image: plant7,
      wateringSchedule: "Once a week",
      lightRequirement: "Bright indirect",
      soilType: "Loamy",
      temperatureRange: "15-25°C",
      humidity: "Medium",
      toxicity: "Toxic",
    },
    {
      id: 8,
      name: "Pothos",
      scientificName: "Epipremnum aureum",
      image: plant8,
      wateringSchedule: "Every 1-2 weeks",
      lightRequirement: "Low to medium",
      soilType: "Well-draining",
      temperatureRange: "18-30°C",
      humidity: "Medium",
      toxicity: "Toxic to pets",
    },
    {
      id: 9,
      name: "Chinese Evergreen",
      scientificName: "Aglaonema",
      image: plant9,
      wateringSchedule: "Every 1-2 weeks",
      lightRequirement: "Low",
      soilType: "Peat-based",
      temperatureRange: "16-27°C",
      humidity: "High",
      toxicity: "Toxic",
    },
    {
      id: 10,
      name: "Boston Fern",
      scientificName: "Nephrolepis exaltata",
      image: plant10,
      wateringSchedule: "Keep soil moist",
      lightRequirement: "Medium to bright indirect",
      soilType: "Rich, well-draining",
      temperatureRange: "16-24°C",
      humidity: "High",
      toxicity: "Non-toxic",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [lightFilter, setLightFilter] = useState('All');
  const [wateringFilter, setWateringFilter] = useState('All');
  const [soilFilter, setSoilFilter] = useState('All');
  const [humidityFilter, setHumidityFilter] = useState('All');
  const [toxicityFilter, setToxicityFilter] = useState('All');

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredPlants = plants
    .filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((plant) =>
      lightFilter === 'All' ? true : plant.lightRequirement === lightFilter
    )
    .filter((plant) =>
      wateringFilter === 'All' ? true : plant.wateringSchedule === wateringFilter
    )
    .filter((plant) =>
      soilFilter === 'All' ? true : plant.soilType === soilFilter
    )
    .filter((plant) =>
      humidityFilter === 'All' ? true : plant.humidity === humidityFilter
    )
    .filter((plant) =>
      toxicityFilter === 'All' ? true : plant.toxicity === toxicityFilter
    );

  return (
    <>
      <Header />
      <main>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <FilterSortBar
          lightFilter={lightFilter}
          onLightFilterChange={setLightFilter}
          wateringFilter={wateringFilter}
          onWateringFilterChange={setWateringFilter}
          soilFilter={soilFilter}
          onSoilFilterChange={setSoilFilter}
          humidityFilter={humidityFilter}
          onHumidityFilterChange={setHumidityFilter}
          toxicityFilter={toxicityFilter}
          onToxicityFilterChange={setToxicityFilter}
        />
        <PlantList plants={filteredPlants} />
        <AddPlantForm onAddPlant={handleAddPlant} />
      </main>
      <Footer />
    </>
  );
};

export default App;

