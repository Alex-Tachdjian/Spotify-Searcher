/** @format */

import React, { useState, useEffect } from "react";
import "./ArtistSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArtistCard from "../ArtistCard/ArtistCard";
import { getArtits } from "../../redux/actions/ArtistsActions";
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
          setSearchValue(e.target.value);
        }}
      />

      {clicked && (
        <div>
          <AlbumCard />
        </div>
      )}
      {!clicked && (
        <div>
          <ArtistCard searchValue={searchValue} setClicked={setClicked} />
        </div>
      )}
    </div>
  );
}

export default ArtistSearch;
