import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { pickedPokemonOne } from "../../store/chosenPokemons/chosenPokemons";
import PokemonInfo from "../../components/PokemonInfo";

function PokemonList(props) {
  const dispatch = useDispatch();
  const listOfPokemons = useSelector((state) => state.pokemonList.list);

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
      {listOfPokemons && (
        <select
          onChange={(e) => fetchPokemonData(e.target.value)}
          name="pokemons"
          id="pokemons"
        >
          <option value="Pokemon one" hidden>
            Pokemon one
          </option>
          {pokemonOptions}
        </select>
      )}
      <PokemonInfo />
    </div>
  );
}

export default PokemonList;
