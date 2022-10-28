/** @format */

import React from "react";
import "../ArtistCard/ArtistCard.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import noPhoto from "../../images/NoPhoto.png";
import { CardActions } from "@mui/material";
import { height } from "@mui/system";
import { useNavigate } from "react-router-dom";
function AlbumCard(displayAlbums) {
  const retreivedAlbums = useSelector((store) => store.AlbumsReducer.albums);
  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <div className="ArtistCard_Container">
      {retreivedAlbums.map((album, i) => {
        return (
          <Card
            key={i}
            sx={{
              width: "15%",
              marginRight: "2rem",
              marginBottom: "2rem",
              borderRadius: "0",
              border: "1px solid gray",
              maxHeight: "20rem",
              minHeight: "19rem",
            }}
          >
            {album.images[1]?.url != undefined ? (
              <CardMedia
                component="img"
                height="140"
                image={album.images[1]?.url}
                alt="green iguana"
              />
            ) : (
              <CardMedia
                component="img"
                height="140"
                image={noPhoto}
                alt="green iguana"
              />
            )}
            <hr style={{ margin: "0" }} />
            <CardContent
              sx={{
                padding: 0,
                paddingLeft: "0.2rem",
                display: "flex",
                flexDirection: "column",
                height: "140px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  maxHeight: "5rem",
                  padding: "0",
                }}
                gutterBottom
                component="div"
              >
                {album.name}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "0.7rem",
                }}
                component="div"
              >
                {album.artists[0].name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "grey  ",
                }}
                gutterBottom
                variant="body2"
                component="div"
              >
                {album.release_date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  color: "grey",
                  fontWeight: "600",
                }}
                gutterBottom
                variant="body2"
                component="div"
              >
                {album.total_tracks + " Tracks"}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: "0",
                display: "flex",
                justifyContent: "center",
                borderTop: "1px solid gray",
              }}
            >
              <Button
                sx={{
                  fontSize: "0.6rem",
                  // display: "flex",
                  // justifyContent: "center",
                }}
                size="small"
                onClick={() => {
                  openInNewTab(album.external_urls.spotify);
                }}
              >
                Preview on Spotify
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default AlbumCard;
