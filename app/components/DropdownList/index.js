import React from "react";
import { StyledDropdown } from "./styles";

function DropdownList({ fetchPokemonData, pokemonOptions }) {
  return (
    <StyledDropdown>
      <div className="search_categories">
        <div className="select">
          <select
            // style={{ backgroundColor: "black", color: "white" }}
            onChange={(e) => fetchPokemonData(e.target.value)}
            name="search_categories"
            id="search_categories"
          >
            <option
              // style={{ textAlign: "center" }}
              value="Choose your pokemon"
              hidden
            >
              Pick a pokemon
            </option>
            {pokemonOptions}
          </select>
        </div>
      </div>
    </StyledDropdown>
  );
}

export default DropdownList;
