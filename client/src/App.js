import React, { useState, useEffect } from "react";
// import { Link, Route } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import "./App.css";
import CreateaMovie from "./components/CreateaMovie";

function App() {
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);

  // const handleSubmit = (event) => event.preventDefault();
  useEffect(() => {
    const getMovies = async () => {
      const resp = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=bce9e682949cac77cfcbf7c7654e8dd0&&language=en-US&page=1&include_adult=false&query=${movies}`
      );
      // console.log(resp.data.results);
      setResults(resp.data.results);
    };
    getMovies();
  }, [movies, toggleFetch]);

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <SearchForm
        movies={movies}
        setMovies={setMovies}
        results={results}
        setToggleFetch={setToggleFetch}
        // handleSubmit={handleSubmit}
      />
      <br />
      <CreateaMovie />
    </div>
  );
}

export default App;
