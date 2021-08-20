import React, { useEffect, useState } from "react";
import "./styles/PokemonApp";
// import { fetchPokemon } from './store/addPokemon/addPokemonReducer';
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "Store/pokemonList/pokemonListReducer";
import PokemonOne from "Containers/PokemonOne";
import PokemonTwo from "Containers/PokemonTwo";
import FightBtn from "Components/FIghtBtn";

function PokemonApp() {
  // const [pokemonOne, setPokemonOne] = useState(null);
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchPokemon()(dispatch)
    // dispatch(fetchPokemon())
    dispatch(fetchList());
  }, []);

  // console.log(pokemonOne);
  return (
    <div>
      <div className="wrapper">
        <PokemonOne />
        <div
          style={{ fontSize: 70, color: "red", fontWeight: 700 }}
          className="versus"
        >
          VS
        </div>
        <PokemonTwo />
      </div>
      <FightBtn pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} />
    </div>
  );
}

export default PokemonApp;

{
  /* <img src={pokemonOne.sprites.other.dream_world.front_default} /> */
}
{
  /* <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/> */
}
{
  /* <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/> */
}
{
  /* <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_shiny}/> */
}
{
  /* <img src={pokemonOne.sprites.versions["generation-v"]["black-white"].animated.front_default}/> */
}
{
  (" ");
}
