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
        }}
        onChange={(e) => {
          if (e.target.value != "") {
            setTimeout(() => {
              dispatch(getArtits(e.target.value));
              setSearchValue(e.target.value);
            }, 2000);
            console.log(e.target.value);
            setSearchValue(e.target.value);
          } else {
            dispatch(resetArtists());
          }
          clearTimeout();
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
