import React, { useState } from 'react';

import plant1 from '../assets/image/plant 1.jpeg';
import plant2 from '../assets/image/plant 2.jpeg';
import plant3 from '../assets/image/plant 3.jpeg';
import plant4 from '../assets/image/plant 4.jpeg';
import plant5 from '../assets/image/plant 5.jpeg';
import plant6 from '../assets/image/plant 6.jpeg';
import plant7 from '../assets/image/plant 7.jpeg';
import plant8 from '../assets/image/plant 8.jpeg';
import plant9 from '../assets/image/plant 9.jpeg';
import plant10 from '../assets/image/plant 10.jpeg';

const imageOptions = [
  { label: 'plant 1', value: plant1 },
  { label: 'plant 2', value: plant2 },
  { label: 'plant 3', value: plant3 },
  { label: 'plant 4', value: plant4 },
  { label: 'plant 5', value: plant5 },
  { label: 'plant 6', value: plant6 },
  { label: 'plant 7', value: plant7 },
  { label: 'plant 8', value: plant8 },
  { label: 'plant 9', value: plant9 },
  { label: 'plant 10', value: plant10 },
];

const AddPlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [image, setImage] = useState('');
  const [wateringSchedule, setWateringSchedule] = useState('');
  const [lightRequirement, setLightRequirement] = useState('');
  const [soilType, setSoilType] = useState('');
  const [temperatureRange, setTemperatureRange] = useState('');
  const [humidity, setHumidity] = useState('');
  const [toxicity, setToxicity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !scientificName || !image || !wateringSchedule || !lightRequirement || !soilType || !temperatureRange || !humidity || !toxicity) {
      setError('All fields are required');
      return;
    }

    const newPlant = {
      id: Date.now(),
      name,
      scientificName,
      image,
      wateringSchedule,
      lightRequirement,
      soilType,
      temperatureRange,
      humidity,
      toxicity,
    };

    onAddPlant(newPlant);

    // Reset all fields
    setName('');
    setScientificName('');
    setImage('');
    setWateringSchedule('');
    setLightRequirement('');
    setSoilType('');
    setTemperatureRange('');
    setHumidity('');
    setToxicity('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Scientific Name"
        value={scientificName}
        onChange={(e) => setScientificName(e.target.value)}
      />

      <select value={image} onChange={(e) => setImage(e.target.value)}>
        <option value="">Select an image</option>
        {imageOptions.map((img, i) => (
          <option key={i} value={img.value}>{img.label}</option>
        ))}
      </select>

      <select value={wateringSchedule} onChange={(e) => setWateringSchedule(e.target.value)}>
        <option value="">Watering Schedule</option>
        <option value="Once a week">Once a week</option>
        <option value="Twice a week">Twice a week</option>
        <option value="Every 1-2 weeks">Every 1-2 weeks</option>
        <option value="Every 2 weeks">Every 2 weeks</option>
        <option value="Every 2-3 weeks">Every 2-3 weeks</option>
        <option value="Every 3 weeks">Every 3 weeks</option>
        <option value="Keep soil moist">Keep soil moist</option>
      </select>

      <select value={lightRequirement} onChange={(e) => setLightRequirement(e.target.value)}>
        <option value="">Light Requirement</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Bright indirect">Bright indirect</option>
        <option value="Low to medium">Low to medium</option>
        <option value="Medium to bright indirect">Medium to bright indirect</option>
      </select>

      <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
        <option value="">Soil Type</option>
        <option value="Well-draining">Well-draining</option>
        <option value="Peat-based">Peat-based</option>
        <option value="Sandy">Sandy</option>
        <option value="Loamy">Loamy</option>
        <option value="Rich, well-draining">Rich, well-draining</option>
      </select>

      <input
        type="text"
        placeholder="Temperature Range (e.g. 16-25°C)"
        value={temperatureRange}
        onChange={(e) => setTemperatureRange(e.target.value)}
      />

      <select value={humidity} onChange={(e) => setHumidity(e.target.value)}>
        <option value="">Humidity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select value={toxicity} onChange={(e) => setToxicity(e.target.value)}>
        <option value="">Toxicity</option>
        <option value="Toxic">Toxic</option>
        <option value="Toxic to pets">Toxic to pets</option>
        <option value="Mildly toxic">Mildly toxic</option>
        <option value="Non-toxic">Non-toxic</option>
      </select>

      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;
