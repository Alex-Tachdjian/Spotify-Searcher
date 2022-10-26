/** @format */
//imports
import React from "react";
import "./LogIn.css";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import spotifyImg from "../../images/spotifypic.jpg";
import { getArtits } from "../../redux/actions/ArtistsActions";
import { getAlbums } from "../../redux/actions/AlbumsActions";
import ArtistSearch from "../ArtistSearch/ArtistSearch";
///////////////////////////////////////////////////////////////////////

//variables needed in order to get an accessToken from spotify
const ENDPOINT = "https://accounts.spotify.com/authorize";
const client_Id = "dc9f55fbb85e446884eca0c9809b709c";
const redirect_uriAfterLogIn = "http://localhost:3000/ArtistSearch";
const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
];
const space = "%20";
const scopesUrlParams = scopes.join(space);
/////////////////////////////////////////////////////////////////////////
export const handleLogIn = () => {
  window.location = `${ENDPOINT}?client_id=${client_Id}&redirect_uri=${redirect_uriAfterLogIn}&scope=${scopesUrlParams}&response_type=token&show_dialog=true`;
};
/*function to decode url and retreive the acces token
 from url in order to use for logging in*/
const decodeURLAfterLogIn = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});
  return paramsSplitUp;
};
/////////////////////////////////////////////////////////////////////////////
let token = "";
function LogIn() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = decodeURLAfterLogIn(
        window.location.hash
      );

      localStorage.setItem("token", access_token);
    }
  }, []);
  token = localStorage.getItem("token");
  useEffect(() => {
    if (!window.location.hash) {
      localStorage.clear();
    }
  });
  //UseStates
  const [searchValue, setSearchValue] = useState("");
  const [clicked, setClicked] = useState(false);
  ////////

  if (!window.location.hash) {
    return (
      <div className="LogIn_mainDiv">
        <button className="LogIn_button" onClick={handleLogIn}>
          Login
          <div className="LogIn_ImgDiv">
            <img src={spotifyImg} style={{ width: "1.5rem" }}></img>
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <div className="LogIn_ArtistSearch">
        <ArtistSearch />
      </div>
    );
  }
}

export default LogIn;
