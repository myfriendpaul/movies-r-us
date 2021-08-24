import MovieCards from "./MovieCards";
import React from "react";

function SearchForm(props) {
  const { results, movies, setMovies, handleSubmit } = props;
  return (
    <div>
      <div className="search-container">
        <ul className="result">
          {results.map((movie, index) => (
            <React.Fragment key={index}>
              <MovieCards movie={movie} />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div>
        <form id="form-container" onSubmit={handleSubmit}>
          <input
            id="searchbar"
            placeholder="Search Hollywood"
            value={movies}
            type="text"
            onChange={(e) => setMovies(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
export default SearchForm;
