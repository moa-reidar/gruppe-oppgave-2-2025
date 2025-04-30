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
};

export default addPlantForm;