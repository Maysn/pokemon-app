import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (min-width: 769px) {
    margin-top: 7rem;
  }
  @media only screen and (min-height: 640px) {
    margin-top: 7rem;
  }
  @media only screen and (min-height: 720px) {
    margin-top: 9rem;
  }
  @media only screen and (min-height: 812px) {
    margin-top: 11rem;
  }
  @media only screen and (min-height: 1024px) {
    margin-top: 17rem;
  }
  @media only screen and (min-height: 1366px) {
    margin-top: 21rem;
  }

  .versus {
    color: whitesmoke;
    filter: drop-shadow(2px 4px 3px black);

    @media only screen and (min-width: 769px) {
      font-size: 2rem;
    }
  }
`;
