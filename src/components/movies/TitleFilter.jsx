import React from 'react';

const TitleFilter = ({ value, handleChange }) => {
  return (
    <label>
      Filtrar Título
      <input value={value} onChange={handleChange} />
    </label>
  );
};

export default TitleFilter;
