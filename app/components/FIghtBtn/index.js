import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fighting } from "Store/chosenPokemons/chosenPokemons";
import { inFight, doneFight } from "Store/fightStatus";

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
    }, 3000);
  };
  return (
    <div>
      {!fightStatus ? (
        <button
          onClick={() => fight(pokemonOne, pokemonTwo)}
          style={{ backgroundColor: "black", color: "red" }}
        >
          <strong>FIGHT</strong>
        </button>
      ) : (
        <button
          disabled
          onClick={() => fight(pokemonOne, pokemonTwo)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "grey 3px solid",
          }}
        >
          <strong>FIGHT</strong>
        </button>
      )}
    </div>
  );
}

export default FightBtn;
