/** @format */

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import artistsSlice from "./ArtistsReducer";
import albumsSlice from "./AlbumsReducer";
const initialState = {};
const middlewares = [thunk];
let devtools = (x) => x;

devtools = window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  ArtistsReducer: artistsSlice.reducer,
  AlbumsReducer: albumsSlice.reducer,
});

export const Store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
);
