import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import Home from './Home';
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Search"
      <Search />
      </Route>
      <Route path="*" element={<NotFound />}>
      </Route>
    </Routes>
    </Router >

  );
};

export default App;
