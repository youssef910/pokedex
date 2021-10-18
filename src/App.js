import React from "react";
import "./App.css";
import Logo from "./Logo";
import PestPokemon from "./PestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
const date = new Date().toLocaleDateString();
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const appName = "Pokedex";

const App = () => {
  return (
    <div className="App">
      <Logo appName={appName} /> <PestPokemon />
      <CaughtPokemon date={date} abilities={abilities} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
