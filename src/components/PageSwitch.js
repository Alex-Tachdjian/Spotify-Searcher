/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtistSearch from "./ArtistSearch/ArtistSearch";
import LogIn from "./LogIn/LogIn";

function PageSwitch() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/ArtistSearch" element={<ArtistSearch />} />
    </Routes>
  );
}

export default PageSwitch;
