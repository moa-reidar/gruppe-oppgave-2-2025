import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterSortBar from './components/FilterSortBar';
import PlantList from './components/PlantList';
import AddPlantForm from './components/AddPlantForm';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <FilterSortBar />
        <PlantList />
        <AddPlantForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
