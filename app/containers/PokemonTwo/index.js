import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { pickedPokemonTwo } from "../../store/chosenPokemons/chosenPokemons";
import PokemonInfo from "Components/PokemonInfo";
import DropdownList from "Components/DropdownList";

function PokemonTwo(props) {
  const dispatch = useDispatch();
  const listOfPokemons = useSelector((state) => state.pokemonList.list);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);

  const pokemonOptions = listOfPokemons?.results.map((pokemon) => (
    <option key={pokemon.url} value={pokemon.url}>
      {pokemon.name}
    </option>
  ));

  async function fetchPokemonData(url) {
    const pokemonData = await api.get(url);
    console.log(dispatch(pickedPokemonTwo(pokemonData)));
  }
  return (
    <div>
      {/* <label htmlFor="pokemons">Choose second Pokemon!</label> */}
      {listOfPokemons && (
        <DropdownList
          fetchPokemonData={fetchPokemonData}
          pokemonOptions={pokemonOptions}
        />
      )}
      <PokemonInfo pokemon={pokemonTwo} />
    </div>
  );
}

export default PokemonTwo;
