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
  background-color: black;
  border-radius: 0.45rem;
  padding: 0.3rem 0;
  & span {
    filter: drop-shadow(3px 7px 3px black);
  }
  .atk {
    color: ${(props) => props.theme.atk};
    font-weight: bold;
    margin-right: 1.3rem;
  }
  .hp {
    color: ${(props) => props.theme.hp};
    font-weight: bold;
  }
`;
