/* eslint-disable import/named */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from "react";
import grid from "../../assets/image/icon-grid.svg";
import { Navbar, GenreBody } from "../../components";

function Genere() {
  return (
    <div>
      <Navbar />
      <div className="genre-wrap">
        <div className="genre-nav">
          <div className="genre">
            <h1>genres</h1>
          </div>
          <div className="grid-icon">
            <img src={grid} alt="grid" />
          </div>
        </div>
        <GenreBody />
      </div>
    </div>
  );
}

export default Genere;
