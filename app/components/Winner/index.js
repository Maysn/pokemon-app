import PlayAgain from "Components/PlayAgain";
import React from "react";
import { useSelector } from "react-redux";

function Winner(props) {
  const winner = useSelector((state) => state.pokemonData.winner);
  return (
    <div>
      <div>
        <h1>{winner.name.toUpperCase()} WINS!</h1>
        <img
          // src={winner.sprites.other.dream_world.front_default}
          src={winner.sprites.other["official-artwork"].front_default}
          alt="WINNER"
        />
      </div>
      <PlayAgain />
    </div>
  );
}

export default Winner;
