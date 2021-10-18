import React, { useState } from "react";
import "./App.css";
import PokemonMoves from "./PokemonMovies";
const PokemonMovesSelector = () => {
  const [id, setId] = useState();
  const handleBulbasaurClick = () => setId(1);
  const handleCharmanderClick = () => setId(4);
  return (
    <div>
      <button onClick={handleBulbasaurClick}>Bulbasaur Movies</button>
      <button onClick={handleCharmanderClick}>Charmander Movies</button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
};

export default PokemonMovesSelector;
