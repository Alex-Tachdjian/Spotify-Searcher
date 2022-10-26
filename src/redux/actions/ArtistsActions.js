/** @format */

import axios from "axios";
import { artistsActions } from "../reducers/ArtistsReducer";
const token = localStorage.getItem("token");

export const getArtits = (searchValue) => async (dispatch) => {
  dispatch(artistsActions.fetchArtistsRequest());
  try {
    let response = await axios.get(
      "https://api.spotify.com/v1/search?q=" + searchValue + "&type=artist",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch(artistsActions.fetchArtistsSuccess(response.data.artists.items));
  } catch (error) {
    dispatch(artistsActions.fetchArtistsFail());
  }
};
