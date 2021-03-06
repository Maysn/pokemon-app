import styled from "styled-components";

export const StyledDropdown = styled.div`
  .search_categories {
    filter: drop-shadow(2px 4px 3px black);
    font-size: 13px;
    padding: 0.3rem;
    background: ${(props) => props.theme.title};
    /* border: 1px solid #ccc; */
    /* border: 1px solid ${(props) => props.theme.bg}; */
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }

  .search_categories .select {
    width: 100%;
    /* background: url("arrow.png") no-repeat; */
    background-position: 80% center;
  }

  .search_categories .select select {
    /* background: transparent; */
    background-color: ${(props) => props.theme.title};
    color: ${(props) => props.theme.text};
    /* color: white; */
    text-align: center;
    line-height: 1;
    border: 0;
    padding: 0;
    border-radius: 0;
    width: 100%;
    position: relative;
    z-index: 10;
    font-size: 1em;
    outline: 0px;
    border: 0px;
  }
`;
