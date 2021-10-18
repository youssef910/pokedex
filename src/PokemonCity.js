import React, { useState } from "react";
const PokemonCity = () => {
  const [city, setCity] = useState("");

  const handleCityName = (event) => {
    return setCity(event.target.value);
  };
  return (
    <div>
      <input type="text" value={city} onChange={handleCityName} />
      <p>welcome to the City of {city}</p>
    </div>
  );
};

export default PokemonCity;
