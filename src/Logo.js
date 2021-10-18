import React from "react";

const Logo = (props) => {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to the {props.appName}</h1>
        <img
          onClick={props.logWhenClicked}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="mainImage"
        />
      </header>
    </div>
  );
};
export default Logo;
