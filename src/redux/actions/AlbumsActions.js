/** @format */

import axios from "axios";
import { albumsActions } from "../reducers/AlbumsReducer";
const token = sessionStorage.getItem("token");
export const getAlbums = (id) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  dispatch(albumsActions.fetchAlbumsRequest());
  try {
    let response = await axios.get(
      "https://api.spotify.com/v1/artists/" +
        id +
        "/albums" +
        "?include_groups=album&limit=50",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch(albumsActions.fetchAlbumsSuccess(response.data.items));
  } catch (error) {
    dispatch(albumsActions.fetchAlbumsFail());
  }
};
