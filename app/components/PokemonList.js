import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/api';
import {pickedPokemonOne, pickedPokemonTwo} from '../store/chosenPokemons/chosenPokemons';

function PokemonList(props) {
    const dispatch = useDispatch();
    const listOfPokemons = useSelector(state => state.pokemonList.list)
    // console.log(listOfPokemons)
    const pokemonOne = useSelector(state => state.pokemonData.pokemonOne);

    const pokemonOptions = listOfPokemons?.results.map(pokemon => <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>)
    
    async function fetchPokemonData (url) {
        const pokemonData = await api.get(url)
        // console.log(pokemonData)
        console.log(dispatch(pickedPokemonOne(pokemonData)));
        // console.log(dispatch(pickedPokemonTwo(pokemonData)));
    }
    return (
        <div> 
            <label htmlFor="pokemons">Choose First Pokemon!</label>
            {listOfPokemons &&  <select onChange={(e) => fetchPokemonData(e.target.value)} name="pokemons" id="pokemons">
                <option value="-" hidden>-</option>
                {pokemonOptions}
            </select>}
        </div>
    );
}

export default PokemonList;