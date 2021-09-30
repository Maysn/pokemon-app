import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fighting } from "Store/chosenPokemons/chosenPokemons";
import { inFight, doneFight } from "Store/fightStatus";
import { StyledButton } from "./styles";

function FightBtn({ pokemonOne, pokemonTwo }) {
  const dispatch = useDispatch();
  const fightStatus = useSelector((state) => state.fightStatus.fighting);

  const fight = (firstPokemon, secondPokemon) => {
    const firstPokemonHP =
      firstPokemon.stats[0].base_stat - secondPokemon.stats[1].base_stat;

    const secondPokemonHP =
      secondPokemon.stats[0].base_stat - firstPokemon.stats[1].base_stat;

    console.log(dispatch(inFight()));

    setTimeout(() => {
      const updatedFirstPokemon = {
        ...firstPokemon,
        stats: firstPokemon.stats.map((item) =>
          item.stat.name === "hp"
            ? { ...item, base_stat: firstPokemonHP }
            : item
        ),
      };
      const updatedSecondPokemon = {
        ...secondPokemon,
        stats: secondPokemon.stats.map((item) =>
          item.stat.name === "hp"
            ? { ...item, base_stat: secondPokemonHP }
            : item
        ),
      };

      console.log(
        dispatch(fighting(updatedFirstPokemon, updatedSecondPokemon))
      );

      console.log(dispatch(doneFight()));
    }, 5000);
  };

  return (
    <div>
      {!fightStatus && (
        <StyledButton
          className="pushable"
          onClick={() => fight(pokemonOne, pokemonTwo)}
        >
          <span className="front">FIGHT</span>
        </StyledButton>
      )}
    </div>
  );
}

export default FightBtn;
