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
`;
