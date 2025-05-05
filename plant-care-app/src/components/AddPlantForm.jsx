import React, { useState } from 'react';

const AddPlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) {
      setError('Both name and image are required.');
      return;
    }

    const newPlant = {
      id: Date.now(),
      name,
      image,
    };

    onAddPlant(newPlant);
    setName('');
    setImage('');
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
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;
