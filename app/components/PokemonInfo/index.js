import React from "react";
import { useSelector } from "react-redux";

function PokemonInfo(props) {
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);

  return (
    pokemonOne && (
      <div className="pokemon">
        <div className="pokemon__pic">
          <img
            src={pokemonOne.sprites?.other["official-artwork"].front_default}
          />
        </div>
        <div className="pokemon__name">{pokemonOne.name}</div>
      </div>
    )
  );
}

export default PokemonInfo;
