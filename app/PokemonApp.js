import React, {useEffect, useState} from 'react';
import './styles/PokemonApp'
import { fetchPokemon } from './store/addPokemon/addPokemonReducer';
import { useDispatch, useSelector } from 'react-redux';

function PokemonApp() {
    // const [pokemonOne, setPokemonOne] = useState(null);
    const pokemonOne = useSelector(state => state.pokemonReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        // fetchPokemon()(dispatch)
        dispatch(fetchPokemon())
        // fetch("https://pokeapi.co/api/v2/pokemon/25")
        // .then(response => response.json())
        // .then(data => setPokemonOne(data));
    },[])

    console.log(pokemonOne);
    return (
        <div> { !pokemonOne? 
            "LOADING..." :
            <div> 
                <img src={pokemonOne.sprites.other["official-artwork"].front_default}/>
                <img src={pokemonOne.sprites.other.dream_world.front_default}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
            </div>}
        </div>
    );
}

export default PokemonApp;