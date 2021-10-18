/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from "react";
const CaughtPokemon = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [caughtList, setCaughtList] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((pokemonList) => {
        setPokemonNames(pokemonList.results.map((item) => item.name));
      });
  }, []);
  const catchPokemon = () => {
    const pokemonName = pokemonNames.find((pokemon) => pokemon === input);
    return pokemonName && setCaughtList(caughtList.concat(pokemonName));
  };
  const catchRandomPokemon = () => {
    const CaughtPokemon =
      pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
    return CaughtPokemon && setCaughtList(caughtList.concat(CaughtPokemon));
  };
  const handleSearchInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      {caughtList ? (
        <div>
          <input type="text" onChange={handleSearchInput} value={input}></input>
          <button onClick={catchPokemon}> Catch Pokemon </button>{" "}
          <p>
            Caught {caughtList.length}
            Pokemon on {props.date}{" "}
            <button onClick={catchRandomPokemon}> Catch Random Pokemon </button>{" "}
          </p>{" "}
          <ul>
            {" "}
            {caughtList.map((item, index) => (
              <li key={index}> {item} </li>
            ))}{" "}
          </ul>{" "}
        </div>
      ) : (
        <p>Lowading....</p>
      )}
    </div>
  );
};
export default CaughtPokemon;
