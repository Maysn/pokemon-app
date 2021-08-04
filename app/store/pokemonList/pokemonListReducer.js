import api from "../../utils/api"

export const fetchList = () => async(dispatch) => {
    dispatch(requestingList);
    const list = await api.get("https://pokeapi.co/api/v2/pokemon?limit=227");
    dispatch(receivedList(list));
}

const REQUESTING_LIST = 'REQUESTING_LIST';
const RECEIVED_LIST = 'RECEIVED_LIST';

const requestingList = () => ({
    type: REQUESTING_LIST
})

const receivedList = (list) => ({
    type: RECEIVED_LIST,
    list
})

const initialState = {
    fetching: false,
    list: null
}

export default function pokemonListReducer  (state = initialState, action) {
    switch(action.type){
        case REQUESTING_LIST: return ({
            fetching: true,
            list: null
        })
        case RECEIVED_LIST: return ({
            fetching: false,
            list:action.list
        })
        default: return state
    }
}