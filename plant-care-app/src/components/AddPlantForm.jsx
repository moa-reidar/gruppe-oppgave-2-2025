import React, { useState } from 'react';

const AddPlantForm = () => {
  const [name, setname] = useState('');
  const [image, setimage] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={ setName(target.value)}
      />
      <input
        type="text"
        placeholder= "URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
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
      {/* inputs og button som før */}
    </form>
  );
};

export default addPlantForm;