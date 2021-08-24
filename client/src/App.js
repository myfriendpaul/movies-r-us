import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import "./App.css";
import CreateaMovie from "./components/CreateaMovie";
import MovieCards from "./components/MovieCards";

function App() {
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=bce9e682949cac77cfcbf7c7654e8dd0&&language=en-US&page=1&include_adult=false&query=${movies}`
    );
    // console.log(resp.data.results);
    setResults(resp.data.results);
    history.push(`/search/${movies}`);
  };

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Route path="/" exact>
        <SearchForm
          movies={movies}
          setMovies={setMovies}
          results={results}
          // setToggleFetch={setToggleFetch}
          handleSubmit={handleSubmit}
        />
      </Route>
      <Route path="/search/:search" exact>
        {results.map((movie) => {
          return <MovieCards movie={movie} />;
        })}
      </Route>
      {/* <CreateaMovie /> */}
    </div>
  );
}

export default App;
