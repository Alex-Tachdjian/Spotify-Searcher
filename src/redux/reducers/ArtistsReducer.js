/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [],
  error: "",
  loading: false,
};

const artistsSlice = createSlice({
  name: "Artits",
  initialState,
  reducers: {
    //Artits Reducers
    fetchArtistsRequest(state) {
      state.loading = true;
      state.artists = [];
      state.error = "";
    },
    fetchArtistsSuccess(state, action) {
      state.loading = false;
      state.error = "";
      state.artists = action.payload;
    },
    fetchArtistsFail(state, action) {
      state.loading = false;
      state.artists = [];
      state.error = action.payload;
    },
    // fetchAlbumsRequest(state) {
    //   state.loading = true;
    //   state.albums = [];
    //   state.error = "";
    // },
    // fetchAlbumsSuccess(state, action) {
    //   state.loading = false;
    //   state.albums = action.payload;
    //   state.error = "";
    // },
    // fetchAlbumsFail(state, action) {
    //   state.loading = false;
    //   state.albums = [];
    //   state.error = action.payload;
    // },
  },
});
export const ArtistsReducer = artistsSlice.reducer;
export const artistsActions = artistsSlice.actions;
export default artistsSlice;
