import api from "../../utils/api";

const REQUESTING_LIST = "REQUESTING_LIST";
const RECEIVED_LIST = "RECEIVED_LIST";
const RECIEVED_DISPLAYED_CARDS_DATA = "RECIEVED_DISPLAYED_CARDS_DATA";

const requestingList = () => ({
  type: REQUESTING_LIST,
});

const receivedList = (list) => ({
  type: RECEIVED_LIST,
  list,
});

export const receivedDisplayedCardsData = (data) => ({
  type: RECIEVED_DISPLAYED_CARDS_DATA,
  data,
});

const initialState = {
  fetching: false,
  list: null,
  displayedCardsData: [],
};

export const fetchList = () => async (dispatch) => {
  dispatch(requestingList);
  const list = await api.get("https://pokeapi.co/api/v2/pokemon?limit=227");
  console.log(dispatch(receivedList(list)));
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTING_LIST:
      return { ...state, fetching: true };
    case RECEIVED_LIST:
      return {
        ...state,
        list: action.list,
      };
    case RECIEVED_DISPLAYED_CARDS_DATA:
      return {
        ...state,
        displayedCardsData: [...state.displayedCardsData, ...action.data],
      };
    default:
      return state;
  }
}
