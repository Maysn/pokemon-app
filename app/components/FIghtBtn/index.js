import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dmgCalc1,
  dmgCalc2,
  fighting,
} from "Store/chosenPokemons/chosenPokemons";
import { inFight, doneFight } from "Store/fightStatus";
import { StyledButton } from "./styles";

function FightBtn({ pokemonOne, pokemonTwo }) {
  const dispatch = useDispatch();
  const fightStatus = useSelector((state) => state.fightStatus.fighting);

  const fight = (firstPokemon, secondPokemon) => {
    let firstPokemonHP = firstPokemon.stats[0].base_stat;
    const updatedFirstPokemonHP =
      firstPokemon.stats[0].base_stat - secondPokemon.stats[1].base_stat;

    let secondPokemonHP = secondPokemon.stats[0].base_stat;
    const updatedSecondPokemonHP =
      secondPokemon.stats[0].base_stat - firstPokemon.stats[1].base_stat;

    console.log(dispatch(inFight()));

    setTimeout(() => {
      let intervalP1 = setInterval(() => {
        firstPokemonHP--;

        const updatedFirstPokemon = {
          ...firstPokemon,
          stats: firstPokemon.stats.map((item) =>
            item.stat.name === "hp"
              ? { ...item, base_stat: firstPokemonHP }
              : item
          ),
        };

        dispatch(dmgCalc1(updatedFirstPokemon));

        if (firstPokemonHP === updatedFirstPokemonHP) {
          clearInterval(intervalP1);
        }
      }, 100);

      let intervalP2 = setInterval(() => {
        secondPokemonHP--;

        const updatedSecondPokemon = {
          ...secondPokemon,
          stats: secondPokemon.stats.map((item) =>
            item.stat.name === "hp"
              ? { ...item, base_stat: secondPokemonHP }
              : item
          ),
        };

        dispatch(dmgCalc2(updatedSecondPokemon));

        if (secondPokemonHP === updatedSecondPokemonHP) {
          clearInterval(intervalP2);
        }
      }, 100);

      // console.log(
      //   dispatch(fighting(updatedFirstPokemon, updatedSecondPokemon))
      // );

      console.log(dispatch(doneFight()));
    }, 7000);
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
