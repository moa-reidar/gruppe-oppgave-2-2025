import React, { useState } from 'react';

const allowedImages = [
  'plant 1.jpeg',
  'plant 2.jpeg',
  'plant 3.jpeg',
  'plant 4.jpeg',
  'plant 5.jpeg',
  'plant 6.jpeg',
  'plant 7.jpeg',
  'plant 8.jpeg',
  'plant 9.jpeg',
  'plant 10.jpeg',
];

const AddPlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) {
      setError('Both name and image are required');
      return;
    }

    if (!allowedImages.includes(image)) {
      setError('Image file not recognized. Make sure it matches an existing image file.');
      return;
    }

    const newPlant = {
      id: Date.now(),
      name: name,
      image: require(`../assets/image/${image}`),
    };

    onAddPlant(newPlant);
    setName('');
    setImage('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image file name (e.g. plant 1.jpeg)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Plant</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddPlantForm;
