import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { pickedPokemonOne } from "../../store/chosenPokemons/chosenPokemons";
import PokemonInfo from "Components/PokemonInfo";
import DropdownList from "Components/DropdownList";

function FirstPokemon(props) {
  const dispatch = useDispatch();
  const listOfPokemons = useSelector((state) => state.pokemonList.list);
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const fightingStatus = useSelector((state) => state.fightStatus.fighting);

  async function fetchPokemonData(url) {
    const pokemonData = await api.get(url);
    console.log(dispatch(pickedPokemonOne(pokemonData)));
  }

  const pokemonOptions = listOfPokemons?.results.map((pokemon) => (
    <option key={pokemon.url} value={pokemon.url}>
      {pokemon.name}
    </option>
  ));

  return (
    <div>
      {/* <label htmlFor="pokemons">Choose First Pokemon!</label> */}
      {/* {listOfPokemons && !fightingStatus && (
        <DropdownList
          fetchPokemonData={fetchPokemonData}
          pokemonOptions={pokemonOptions}
        />
      )} */}
      <PokemonInfo id={1} pokemon={pokemonOne} />
    </div>
  );
}

export default FirstPokemon;
