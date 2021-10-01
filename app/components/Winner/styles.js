import styled from "styled-components";

export const StyledWinnerH1 = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 5rem;
  filter: drop-shadow(2px 4px 3px black);
  color: ${(props) => props.theme.title};

  @media only screen and (min-width: 360px) {
    margin-top: 7rem;
  }
  @media only screen and (min-width: 411px) {
    margin-top: 11rem;
  }
  @media only screen and (min-width: 769px) {
    font-size: 1.5rem;
    margin-top: 9rem;
  }
  @media only screen and (min-height: 812px) {
    margin-top: 13rem;
  }
  @media only screen and (min-height: 1366px) {
    margin-top: 17rem;
  }
`;

export const StyledWinnerImg = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 4rem;

  @media only screen and (min-width: 769px) {
    height: 300px;
    width: 300px;
  }
  @media only screen and (min-height: 812px) {
    margin-top: 7rem;
  }
  @media only screen and (min-height: 823px) {
    height: 300px;
    width: 300px;
    margin-top: 9rem;
  }
  @media only screen and (min-height: 1366px) {
    margin-top: 17rem;
  }
`;
