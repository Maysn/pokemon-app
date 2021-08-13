export const PICKED_POKEMON_ONE = "PICKED_POKEMON_ONE";
export const PICKED_POKEMON_TWO = "PICKED_POKEMON_TWO";

export const pickedPokemonOne = (pokemonOneData) => ({
  type: PICKED_POKEMON_ONE,
  pokemonOneData,
});
export const pickedPokemonTwo = (pokemonTwoData) => ({
  type: PICKED_POKEMON_TWO,
  pokemonTwoData,
});

const initialState = {
  pokemonOne: {},
  pokemonTwo: {},
};

export default function pokemonDataReducer(state = initialState, action) {
  switch (action.type) {
    case PICKED_POKEMON_ONE:
      return { ...state, pokemonOne: action.pokemonOneData };
    case PICKED_POKEMON_TWO:
      return { ...state, pokemonTwo: action.pokemonTwoData };
    default:
      return state;
  }
}
