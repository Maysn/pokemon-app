import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fighting } from "Store/chosenPokemons/chosenPokemons";

function FightBtn({ pokemonOne, pokemonTwo }) {
  const [inFight, setInFight] = useState(false);
  const dispatch = useDispatch();

  const fight = (firstPokemon, secondPokemon) => {
    const firstPokemonHP =
      firstPokemon.stats[0].base_stat - secondPokemon.stats[1].base_stat;

    const secondPokemonHP =
      secondPokemon.stats[0].base_stat - firstPokemon.stats[1].base_stat;

    setInFight(true);
    console.log(inFight);
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
      setInFight(false);
      console.log(inFight);
    }, 1000);
  };
  return (
    <div>
      {!inFight ? (
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
          style={{ backgroundColor: "white", color: "black" }}
        >
          <strong>FIGHT</strong>
        </button>
      )}
    </div>
  );
}

export default FightBtn;
