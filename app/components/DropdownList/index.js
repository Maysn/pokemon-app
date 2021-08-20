import React from "react";

function DropdownList({ fetchPokemonData, pokemonOptions }) {
  return (
    <div>
      <select
        style={{ backgroundColor: "black", color: "white" }}
        onChange={(e) => fetchPokemonData(e.target.value)}
        name="pokemons"
        id="pokemons"
      >
        <option
          style={{ textAlign: "center" }}
          value="Choose your pokemon"
          hidden
        >
          Pick a pokemon
        </option>
        {pokemonOptions}
      </select>
    </div>
  );
}

export default DropdownList;
