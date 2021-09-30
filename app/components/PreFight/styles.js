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
`;
