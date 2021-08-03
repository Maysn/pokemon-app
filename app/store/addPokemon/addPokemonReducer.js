import api from '../../utils/api';
import { useSelector, useDispatch } from 'react-redux';


export const fetchPokemon = () => async (dispatch) => {
    const pokemon = await api.get("https://pokeapi.co/api/v2/pokemon/25");
    console.log(pokemon)
    dispatch(receivedData(pokemon))
}


const RECEIVED_DATA = 'RECEIVED_DATA';

const receivedData = (data) => ({
    type: RECEIVED_DATA,
    data
})

const defState = {
    fetching: true,
    data : null
}

export default function pokemonReducer (state= defState, action) {
    switch(action.type){
        case RECEIVED_DATA: return {fetching: false, data: action.data}
        default: return state
    }
}





















// const REQUESTING_DATA = 'REQUESTIN_DATA';
// const RECEIVED_DATA = 'RECEIVED_DATA';

// const requestingData = () => ({type: REQUESTING_DATA})
// const receivedData = (data) => ({type: RECEIVED_DATA, data})

// export const getPokemon = (dispatch) => {
//    return async() => {
//         dispatch(requestingData);
//         const pokemon = api.get(`https://pokeapi.co/api/v2/pokemon/25`)
//         dispatch(receivedData(data))
        
//     }
// }

// const defaultState = {
//     fetching: false,
//     data : []
// }

// const pokemonReducer = (defaultState, action) => {
//     switch(action.type){
//         case REQUESTING_DATA: return {
//             fetching: true,
//             data : []
//         }
//         case RECEIVED_DATA: return {
//             fetching: false,
//             data : action.data
//         }
//     }
// }