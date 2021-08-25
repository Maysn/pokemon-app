import { StyledButton } from "Components/FIghtBtn/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { playAgain } from "Store/chosenPokemons/chosenPokemons";

function PlayAgain(props) {
  const dispatch = useDispatch();
  return (
    <StyledButton className="pushable" onClick={() => dispatch(playAgain())}>
      <span className="front">PLAY AGAIN</span>
    </StyledButton>
  );
}

export default PlayAgain;
