import React, {useEffect, useState} from 'react';
import './styles/PokemonApp'
// import { fetchPokemon } from './store/addPokemon/addPokemonReducer';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from 'Components/PokemonList';
import { fetchList } from 'Store/pokemonList/pokemonListReducer';
import PokemonListTwo from 'Components/PokemonListTwo';

function PokemonApp() {
    // const [pokemonOne, setPokemonOne] = useState(null);
    const pokemonOne = useSelector(state => state.pokemonData.pokemonOne);
    const pokemonTwo = useSelector(state => state.pokemonData.pokemonTwo);
    const dispatch = useDispatch();
    useEffect(() => {
        // fetchPokemon()(dispatch)
        // dispatch(fetchPokemon())
        dispatch(fetchList())
    },[])

    // console.log(pokemonOne);
    return (
        <div> { !pokemonOne? 
            "LOADING..." :
            <div> 
                <img src={pokemonOne.sprites?.other["official-artwork"].front_default}/>
                <PokemonList/>
                <img src={pokemonTwo.sprites?.other["official-artwork"].front_default}/>
                {/* <img src={pokemonOne.sprites.other.dream_world.front_default}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/>
                <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/> */}
                <PokemonListTwo/>
            </div>}
        </div>
    );
}

export default PokemonApp;