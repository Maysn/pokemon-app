import React from "react";
import { useSelector } from "react-redux";

function PokemonInfo({ pokemon, id }) {
  const fightingStatus = useSelector((state) => state.fightStatus.fighting);
  return (
    pokemon && (
      <div className="pokemon">
        <div className="pokemon__pic">
          {!fightingStatus ? (
            <img
              className={id === 1 ? "flop" : ""}
              style={{ width: 300, height: 300 }}
              // src={pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default}
              src={pokemon.sprites.other.dream_world.front_default}
            />
          ) : (
            <img
              className={id === 1 ? "flop" : ""}
              style={{ width: 300, height: 300 }}
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny
              }
            />
          )}
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
