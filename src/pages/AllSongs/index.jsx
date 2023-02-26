/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-lone-blocks */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Card } from "../../components";
import logo from "../../assets/image/icon-genre.svg";
import makeRequest from "../../utils/makeRequest";
import { GENERE_ROUTE } from "../../constants/routes";

import "./AllSongs.css";
import { GET_ALL_RECORDS } from "../../constants/apiEndpoints";

function AllSongs() {
  const [allSongs, setSongs] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_ALL_RECORDS, {}).then((response) => {
      const songs = response.data;
      setSongs(songs);
    });
  }, []);

  return allSongs ? (
    <div>
      <Navbar />
      <div className="all-songs">
        <div className="nav-songs">
          <h1>All Songs</h1>
          <div
            className="all-songs-icon"
            onClick={(song) => navigate(GENERE_ROUTE)}
          >
            <img src={logo} />
          </div>
        </div>
        <div className="card-grid">
          {allSongs.map((song) => (
            <Card key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default AllSongs;
