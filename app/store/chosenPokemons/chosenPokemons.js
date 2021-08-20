export const PICKED_POKEMON_ONE = "PICKED_POKEMON_ONE";
export const PICKED_POKEMON_TWO = "PICKED_POKEMON_TWO";
export const FIGHT = "FIGHT";

export const pickedPokemonOne = (pokemonOneData) => ({
  type: PICKED_POKEMON_ONE,
  pokemonOneData,
});
export const pickedPokemonTwo = (pokemonTwoData) => ({
  type: PICKED_POKEMON_TWO,
  pokemonTwoData,
});

export const fighting = (updatedFirstPokemon, updatedSecondPokemon) => ({
  type: FIGHT,
  updatedFirstPokemon,
  updatedSecondPokemon,
});

const initialState = {
  pokemonOne: null,
  pokemonTwo: null,
};

export default function pokemonDataReducer(state = initialState, action) {
  switch (action.type) {
    case PICKED_POKEMON_ONE:
      return { ...state, pokemonOne: action.pokemonOneData };
    case PICKED_POKEMON_TWO:
      return { ...state, pokemonTwo: action.pokemonTwoData };
    case FIGHT:
      return {
        ...state,
        pokemonOne: action.updatedFirstPokemon,
        pokemonTwo: action.updatedSecondPokemon,
      };
    default:
      return state;
  }
}
