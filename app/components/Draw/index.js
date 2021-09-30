import React from "react";
import { useSelector } from "react-redux";
import PlayAgain from "Components/PlayAgain";
import {
  StyledDraw,
  StyledDrawHeader,
  StyledDrawImages,
  StyledDrawImagesWrapper,
} from "Components/Draw/styles";

function Draw(props) {
  const pokemonOne = useSelector((state) => state.pokemonData.pokemonOne);
  const pokemonTwo = useSelector((state) => state.pokemonData.pokemonTwo);
  return (
    <div>
      <StyledDrawHeader>DRAW!</StyledDrawHeader>
      <StyledDraw>
        <StyledDrawImagesWrapper>
          <div>
            <StyledDrawImages
              src={
                pokemonOne.sprites.versions["generation-v"]["black-white"]
                  .back_default
              }
              alt=""
              // style={{ width: 200, height: 211 }}
            />
          </div>
          <div>
            <StyledDrawImages
              src={
                pokemonTwo.sprites.versions["generation-v"]["black-white"]
                  .back_default
              }
              alt=""
              // style={{ width: 200, height: 211 }}
              className="flop"
            />
          </div>
        </StyledDrawImagesWrapper>
      </StyledDraw>
      <PlayAgain />
    </div>
  );
}

export default Draw;
