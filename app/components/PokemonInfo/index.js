import React from "react";

function PokemonInfo({ pokemon }) {
  return (
    pokemon && (
      <div className="pokemon">
        <div className="pokemon__pic">
          <img
            style={{ width: 330, height: 330 }}
            src={pokemon.sprites.other.dream_world.front_default}
          />
        </div>
        <div className="pokemon__stats">
          <span>ATK {pokemon.stats[1].base_stat}</span>
          <br />
          <span>HP {pokemon.stats[0].base_stat}</span>
        </div>
      </div>
    )
  );
}

export default PokemonInfo;
