import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import "./App.css";
import MovieCards from "./components/MovieCards";
import Footer from "./components/Footer";
import { tmdbBaseURL } from "./services/index.js";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      secondary: "#2A2F3D",
    },
    text: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios(`${tmdbBaseURL}${movies}`);
    // console.log(resp.data.results);
    setResults(resp.data.results);
    history.push(`/search/${movies}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <Nav />
        </nav>

        <Route path="/" exact>
          <SearchForm
            movies={movies}
            setMovies={setMovies}
            results={results}
            handleSubmit={handleSubmit}
          />
        </Route>

        <Route path="/search/:search" exact>
          {results.map((movie, index) => {
            return (
              <MovieCards
                movie={movie}
                key={index}
                setToggleFetch={setToggleFetch}
              />
            );
          })}
        </Route>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
