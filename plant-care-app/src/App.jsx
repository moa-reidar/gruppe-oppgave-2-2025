import React from 'react'; 

import Header from './Components/Header'; 
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterSortbar from './components/FilterSortBar'; 
import Plantlist from './components/PlantList'; 
import AddPlantForm from './components/AddPlantForm';

const App = () => {
  return (
    <div> 
      <Header />
      <main>
        <SearchBar />
        <FilterSortbar />
        <Plantlist />
        <AddPlantForm />
      </main>
      <Footer />
    </div>
  );
};

export default app; 
