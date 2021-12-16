import FightBtn from "Components/FIghtBtn";
import FirstPokemon from "Containers/FirstPokemon";
import SecondPokemon from "Containers/SecondPokemon";
import React from "react";
import { useSelector } from "react-redux";
import { StyledWrapper } from "./styles";

function PreFight(props) {
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);
  const fightingStatus = useSelector((state) => state.fightStatus.fighting);

  return (
    <div>
      <StyledWrapper>
        <FirstPokemon />
        {!fightingStatus && <div className="versus">VS</div>}
        <SecondPokemon />
      </StyledWrapper>
      {/* <FightBtn pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} /> */}
    </div>
  );
}

export default PreFight;
