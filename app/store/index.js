import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import ExampleReducer from "./example/reducer";
import pokemonReducer from "./addPokemon/addPokemonReducer";
import pokemonListReducer from "./pokemonList/pokemonListReducer";

const reducers = combineReducers({
  exampleState: ExampleReducer,
  pokemonReducer: pokemonReducer,
  pokemonList: pokemonListReducer,
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
// other store enhancers if any
export const store = createStore(reducers, enhancer);









// import { createStore, combineReducers, compose } from "redux";
// import ExampleReducer from "./example/reducer";

// const reducers = combineReducers({
//   exampleState: ExampleReducer,
// });
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers();
// // other store enhancers if any
// export const store = createStore(reducers, enhancer);
