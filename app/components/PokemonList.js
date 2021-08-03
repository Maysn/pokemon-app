import React from 'react';
import { useSelector } from 'react-redux';

function PokemonList(props) {
    const listOfPokemons = useSelector(state => state.pokemonList.list)
    console.log(listOfPokemons)

    const pokemonOptions = listOfPokemons?.results.map(pokemon => <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>)
    return (
        <div> 
            <label htmlFor="pokemons">Choose Your Pokemon!</label>
            {listOfPokemons &&  <select name="pokemons" id="pokemons">
                <option value="-" hidden>-</option>
                {pokemonOptions}
            </select>}
        </div>
    );
}

export default PokemonList;