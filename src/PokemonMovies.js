import React, { useEffect, useState } from "react";

const PokemonMoves = (props) => {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((result) => setPokemonData(result))
      .catch(console.error());
  }, [props.pokemonId]);

  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul className="pokemon-movies-container">
            {pokemonData.moves.map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonMoves;
