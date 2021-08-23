import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="movie">
      <h2>This is the search result component</h2>

      {results.length > 0 && (
        <ul className="result">
          {results.map((movie, index) => (
            <React.Fragment key={index}>
              <li>{movie.title}</li>
              <img
                alt="poster"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              />
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
