import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    color: ${(props) => props.theme.title};
    margin-left: 1rem;
    font-size: 1.3rem;
    filter: drop-shadow(2px 4px 3px black);
    font-family: "Pokemon Solid", sans-serif;

    @media only screen and (min-width: 769px) {
      font-size: 1.7rem;
    }
  }
`;
