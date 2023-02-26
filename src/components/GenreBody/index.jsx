/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from "react";
import pop from "../../assets/image/genre-pop.png";
import Card from "../Card";
import "./GenreBody.css";

function GenreBody(song) {
  return (
    <div>
      <div className="genre-logo">
        <img src={pop} alt="pop" />
        <div className="genre-title pill-shape">pop</div>
      </div>
      <div className="genre-body">
        <Card song={song} />
      </div>
    </div>
  );
}

export default GenreBody;
