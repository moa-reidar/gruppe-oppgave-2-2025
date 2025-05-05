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
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Both name and image are required");
      return;
    }

    const newPlant = {
      id: Date.now(),
      name: name,
      image: image,
    };

    onAddPlant(newPlant);
    setName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={image} onChange={(e) => setImage(e.target.value)}>
        <option value="">Select an image</option>
        {imageOptions.map((img, index) => (
          <option key={index} value={img.value}>{img.label}</option>
        ))}
      </select>
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;
