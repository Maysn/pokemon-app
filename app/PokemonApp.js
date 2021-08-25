import React, { useEffect, useState } from "react";
import "./styles/PokemonApp";
// import { fetchPokemon } from './store/addPokemon/addPokemonReducer';
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "Store/pokemonList/pokemonListReducer";
import {
  draw,
  firstPokemonWins,
  secondPokemonWins,
} from "Store/chosenPokemons/chosenPokemons";
import { ThemeProvider } from "styled-components";
import { themes } from "Styles/themes";
import GlobalStyles from "Styles/GlobalStyles";
import Winner from "Components/Winner";
import Draw from "Components/Draw";
import PreFight from "Components/PreFight";
import Header from "Components/Header";

function PokemonApp() {
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState("darkTheme");
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);
  const winner = useSelector((state) => state.pokemonData.winner);
  useEffect(() => {
    // fetchPokemon()(dispatch)
    // dispatch(fetchPokemon())
    dispatch(fetchList());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        pokemonOne?.stats[0].base_stat <= 0 &&
        pokemonTwo?.stats[0].base_stat <= 0
      ) {
        dispatch(draw());
      } else if (pokemonOne?.stats[0].base_stat <= 0) {
        dispatch(secondPokemonWins(pokemonTwo));
      } else if (pokemonTwo?.stats[0].base_stat <= 0) {
        dispatch(firstPokemonWins(pokemonOne));
      }
    }, 3000);
  }, [pokemonOne, pokemonTwo]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <div>
        <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <div className="main">
          {!winner ? <PreFight /> : winner === "DRAW" ? <Draw /> : <Winner />}
        </div>
      </div>
    </ThemeProvider>
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
