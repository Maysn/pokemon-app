import React, { useEffect, useState } from "react";
import "./styles/PokemonApp";
// import { fetchPokemon } from './store/addPokemon/addPokemonReducer';
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "Store/pokemonList/pokemonListReducer";
import PokemonOne from "Containers/PokemonOne";
import PokemonTwo from "Containers/PokemonTwo";
import FightBtn from "Components/FIghtBtn";
import {
  draw,
  firstPokemonWins,
  playAgain,
  secondPokemonWins,
} from "Store/chosenPokemons/chosenPokemons";

function PokemonApp() {
  const dispatch = useDispatch();
  // const [pokemonOne, setPokemonOne] = useState(null);
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);
  const winner = useSelector((state) => state.pokemonData.winner);
  useEffect(() => {
    // fetchPokemon()(dispatch)
    // dispatch(fetchPokemon())
    dispatch(fetchList());
  }, []);

  useEffect(() => {
    if (
      pokemonOne?.stats[0].base_stat <= 0 &&
      pokemonTwo?.stats[0].base_stat <= 0
    ) {
      console.log(dispatch(draw()));
    } else if (pokemonOne?.stats[0].base_stat <= 0) {
      console.log(dispatch(secondPokemonWins(pokemonTwo)));
    } else if (pokemonTwo?.stats[0].base_stat <= 0) {
      console.log(dispatch(firstPokemonWins(pokemonOne)));
    }
    return console.log("FUCK YOU");
  }, [pokemonOne, pokemonTwo]);
  // console.log(pokemonOne);
  return (
    <div>
      {!winner ? (
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
      ) : winner === "DRAW" ? (
        <div>
          <h1>DRAW!</h1>
          <button
            onClick={() => dispatch(playAgain())}
            style={{ backgroundColor: "black", color: "red" }}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h1>{winner.name.toUpperCase()} WINS!</h1>
            <img
              src={winner.sprites.other.dream_world.front_default}
              alt="WINNER"
            />
          </div>
          <button
            onClick={() => dispatch(playAgain())}
            style={{ backgroundColor: "black", color: "red" }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
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
