import FightBtn from "Components/FIghtBtn";
import FirstPokemon from "Containers/FirstPokemon";
import SecondPokemon from "Containers/SecondPokemon";
import React from "react";
import { useSelector } from "react-redux";

function PreFight(props) {
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);

  return (
    <div>
      <div className="wrapper">
        <FirstPokemon />
        <div className="versus">VS</div>
        <SecondPokemon />
      </div>
      <FightBtn pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} />
    </div>
  );
}

export default PreFight;
