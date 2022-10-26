
/** @format */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  albums: [],
  error: "",
  loading: false,
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    fetchAlbumsRequest(state) {
      state.loading = true;
      state.albums = [];
      state.error = "";
    },
    fetchAlbumsSuccess(state, action) {
      state.loading = false;
      state.albums = action.payload;
      state.error = "";
    },
    fetchAlbumsFail(state, action) {
      state.loading = false;
      state.albums = [];
      state.error = action.payload;
    },
  },
});
export const AlbumsReducer = albumsSlice.reducer;
export const albumsActions = albumsSlice.actions;
export default albumsSlice;
