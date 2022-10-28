/** @format */

import React, { useState, useEffect } from "react";
import "./ArtistSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArtistCard from "../ArtistCard/ArtistCard";
import { getArtits, resetArtists } from "../../redux/actions/ArtistsActions";
import { useDispatch } from "react-redux";
import AlbumCard from "../AlbumCard/AlbumCard";

function ArtistSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const searchOnEnter = () => {
    setClicked(false);
    dispatch(getArtits(searchValue));
  };
  let timer;

  const dispatch = useDispatch();
  return (
    <div className="ArtistSearch_MainDiv">
      <input
        className="ArtistSearch_SearchInput"
        type="text"
        placeholder="Search for an Artist..."
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            searchOnEnter();
          }
          if (timer != null) {
            clearTimeout(timer);
          }
        }}
        onKeyUp={(e) => {
          clearTimeout(timer);
          if (e.target.value != "") {
            timer = setTimeout(() => {
              dispatch(getArtits(e.target.value));
              setSearchValue(e.target.value);
            }, 5000);

            setSearchValue(e.target.value);
          } else {
            dispatch(resetArtists());
          }
        }}
      />

      {clicked && (
        <div style={{ width: "100%" }}>
          <AlbumCard />
        </div>
      )}
      {!clicked && (
        <div style={{ width: "100%" }}>
          <ArtistCard searchValue={searchValue} setClicked={setClicked} />
        </div>
      )}
    </div>
  );
}

export default ArtistSearch;
