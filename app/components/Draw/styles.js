import styled from "styled-components";

export const StyledDraw = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDrawImagesWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
`;

export const StyledDrawImages = styled.img`
  width: 200px;
  height: 211px;

  @media only screen and (min-width: 769px) {
    height: 250px;
  }
`;

export const StyledDrawHeader = styled.h1`
  margin-top: 3rem;
  font-size: 1.3rem;
  color: white;

  @media only screen and (min-width: 769px) {
    font-size: 1.7rem;
    margin-top: 9rem;
  }
  @media only screen and (min-height: 600px) {
    font-size: 1.7rem;
    margin-top: 0;
  }
  @media only screen and (min-height: 640px) {
    font-size: 1.7rem;
    margin-top: 7rem;
  }
  @media only screen and (min-height: 720px) {
    font-size: 1.7rem;
    margin-top: 9rem;
  }
  @media only screen and (min-height: 736px) {
    font-size: 1.7rem;
    margin-top: 9rem;
  }
  @media only screen and (min-height: 812px) {
    font-size: 1.7rem;
    margin-top: 13rem;
  }
  @media only screen and (min-height: 1024px) {
    font-size: 1.7rem;
    margin-top: 21rem;
  }
  @media only screen and (min-height: 1366px) {
    font-size: 1.7rem;
    margin-top: 33rem;
  }
`;
