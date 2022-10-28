/** @format */

import axios from "axios";
import { artistsActions } from "../reducers/ArtistsReducer";
const token = sessionStorage.getItem("token");

export const getArtits = (searchValue) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
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

export const resetArtists = () => async (dispatch) => {
  dispatch(artistsActions.reset());
};
