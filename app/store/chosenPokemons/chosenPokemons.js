const PICKED_POKEMON_ONE = "PICKED_POKEMON_ONE";
const PICKED_POKEMON_TWO = "PICKED_POKEMON_TWO";
const UPDATE_FIRST_POKEMON = "UPDATE_FIRST_POKEMON";
const UPDATE_SECOND_POKEMON = "UPDATE_SECOND_POKEMON";
const FIRST_POKEMON = "FIRST_POKEMON";
const SECOND_POKEMON = "SECOND_POKEMON";
const DRAW = "DRAW";
const PLAY_AGAIN = "PLAY_AGAIN";

export const pickedPokemonOne = (pokemonOneData) => ({
  type: PICKED_POKEMON_ONE,
  pokemonOneData,
});
export const pickedPokemonTwo = (pokemonTwoData) => ({
  type: PICKED_POKEMON_TWO,
  pokemonTwoData,
});

export const dmgCalc1 = (updatedFirstPokemon) => ({
  type: UPDATE_FIRST_POKEMON,
  updatedFirstPokemon,
});
export const dmgCalc2 = (updatedSecondPokemon) => ({
  type: UPDATE_SECOND_POKEMON,
  updatedSecondPokemon,
});

export const firstPokemonWins = (payload) => ({ type: FIRST_POKEMON, payload });

export const secondPokemonWins = (payload) => ({
  type: SECOND_POKEMON,
  payload,
});

export const draw = () => ({ type: DRAW });

export const playAgain = () => ({ type: PLAY_AGAIN });

const initialState = {
  pokemonOne: null,
  pokemonTwo: null,
  winner: null,
};

export default function pokemonDataReducer(state = initialState, action) {
  switch (action.type) {
    case PICKED_POKEMON_ONE:
      return { ...state, pokemonOne: action.pokemonOneData };

    case PICKED_POKEMON_TWO:
      return { ...state, pokemonTwo: action.pokemonTwoData };

    case UPDATE_FIRST_POKEMON:
      return {
        ...state,
        pokemonOne: action.updatedFirstPokemon,
      };
    case UPDATE_SECOND_POKEMON:
      return {
        ...state,
        pokemonTwo: action.updatedSecondPokemon,
      };

    case FIRST_POKEMON:
      return { ...state, winner: action.payload };

    case SECOND_POKEMON:
      return { ...state, winner: action.payload };

    case DRAW:
      return { ...state, winner: "DRAW" };

    case PLAY_AGAIN:
      return { ...state, winner: null, pokemonOne: null, pokemonTwo: null };

    default:
      return state;
  }
}
