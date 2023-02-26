/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Card.css";
import Like from "../Like";

function Card({ song }) {
  return (
    <div>
      <div className="card-body">
        <div className="card-img">
          <img src={song.imageUrl} alt={song.name} />
        </div>
        <div className="card-footer">
          <div className="card-txt">
            <div className="card-song">{song.name}</div>
            <div className="card-artist">{song.artist.name}</div>
          </div>
          <Like id={song.id} />
        </div>
      </div>
    </div>
  );
}

export default Card;
