import styled from "styled-components";

export const StyledPokemonImgWrapper = styled.div`
  margin-top: 7rem;
`;

export const StyledPokemonImg = styled.img`
  width: 100px;
  height: 150px;

  @media only screen and (min-width: 769px) {
    width: 200px;
    height: 200px;
    margin-top: 3rem;
  }
`;

export const StyledPokemonStats = styled.div`
  & span {
    filter: drop-shadow(3px 7px 3px black);
  }
`;
