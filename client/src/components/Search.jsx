import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCards from "./MovieCards";

function Search(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=bce9e682949cac77cfcbf7c7654e8dd0&&language=en-US&page=1&include_adult=false&query=${props.movies}`
      );
      console.log(resp.data.results);
      setResults(resp.data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="search-container">
      {results.length > 0 && (
        <ul className="result">
          {results.map((movie) => (
            <React.Fragment key={movie.id}>
              <MovieCards movie={movie} />
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
