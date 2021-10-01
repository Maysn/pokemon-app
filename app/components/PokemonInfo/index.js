import React from "react";
import { useSelector } from "react-redux";
import {
  StyledPokemonImg,
  StyledPokemonImgWrapper,
  StyledPokemonStats,
} from "./styles";

function PokemonInfo({ pokemon, id }) {
  const fightingStatus = useSelector((state) => state.fightStatus.fighting);
  return (
    pokemon && (
      <div className="pokemon">
        <StyledPokemonImgWrapper>
          {!fightingStatus ? (
            <StyledPokemonImg
              className={id === 1 ? "flop" : ""}
              // style={{ width: 200, height: 200 }}
              // src={pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default}
              src={pokemon.sprites.other.dream_world.front_default}
            />
          ) : (
            <StyledPokemonImg
              className={id === 1 ? "flop left" : "right"}
              // style={{ width: 200, height: 200 }}
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny
              }
            />
          )}
        </StyledPokemonImgWrapper>
        {!fightingStatus && (
          <StyledPokemonStats>
            <span>ATK {pokemon.stats[1].base_stat}</span>
            <br />
            <span>HP {pokemon.stats[0].base_stat}</span>
          </StyledPokemonStats>
        )}
      </div>
    )
  );
}

export default PokemonInfo;
