/** @format */

import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import noPhoto from "../../images/NoPhoto.png";
import "./ArtistCard.css";
import { getAlbums } from "../../redux/actions/AlbumsActions";
/////
function ArtistCard({ searchValue, setClicked }) {
  const dispatch = useDispatch();
  const retreivedArtists = useSelector((store) => store.ArtistsReducer.artists);

  /////////
  return (
    <div className="ArtistCard_Container">
      {retreivedArtists.map((artist, i) => {
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
              minWidth: "10rem",
            }}
            onClick={() => {
              // retreiveAlbums(i);
              // <AlbumCard displayAlbums={retreiveAlbums()} />;
              setClicked(true);
              dispatch(getAlbums(artist.id));
            }}
          >
            {artist.images[1]?.url != undefined ? (
              <CardMedia
                component="img"
                height="140"
                image={artist.images[0]?.url}
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
            <div className="rating_Div">
              <CardContent
                sx={{
                  padding: 0,
                  paddingLeft: "0.2rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "140px",
                  lineHeight: "1",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    maxHeight: "5rem",
                    padding: "0",
                  }}
                  gutterBottom
                  variant="overline"
                  component="div"
                >
                  {artist.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    color: "grey  ",
                  }}
                >
                  {artist.followers.total + " followers"}
                </Typography>
              </CardContent>
              <Typography variant="body2" color="text.secondary">
                <Rating
                  name="simple-controlled"
                  value={(artist.popularity / 100) * 5}
                  readOnly
                />
              </Typography>
              {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default ArtistCard;
