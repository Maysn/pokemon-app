import styled from "styled-components";

export const StyledDropdown = styled.div`
  .search_categories {
    font-size: 13px;
    padding: 0.3rem;
    background: ${(props) => props.theme.ddl};
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => props.theme.bg};
    border-radius: 6px;
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
    background-color: ${(props) => props.theme.ddl};
    color: ${(props) => props.theme.bg};
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
