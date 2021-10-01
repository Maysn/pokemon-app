import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 2rem;
  filter: drop-shadow(2px 4px 3px black);
  &.pushable {
    /* background: hsl(340deg 100% 32%); */
    background: ${(props) => props.theme.accents};
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
  }
  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    filter: drop-shadow(2px 4px 3px black);
    font-size: 1.25rem;
    /* background: hsl(345deg 100% 47%); */
    background: ${(props) => props.theme.title};
    color: ${(props) => props.theme.text};
    transform: translateY(-6px);

    @media only screen and (max-width: 480px) {
      padding: 7px 22px;
      font-size: 1rem;
    }
  }

  &.pushable:active .front {
    transform: translateY(-2px);
  }

  &.pushable:disabled .front {
    background: ${(props) => props.theme.accents};
    transform: translateY(0);
  }
`;
