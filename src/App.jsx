/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ALLSONGS_ROUTE, GENERE_ROUTE, SYNC_ROUTE } from "./constants/routes";
import { AllSongs, Genere, Sync } from "./pages";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={SYNC_ROUTE} element={<Sync />} />
          <Route path={ALLSONGS_ROUTE} element={<AllSongs />} />
          <Route path={GENERE_ROUTE} element={<Genere />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
