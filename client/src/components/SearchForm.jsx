import { Link, Route } from "react-router-dom";
import MovieCards from "./MovieCards";
import React from "react";

function SearchForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };

  return (
    <div>
      <div className="search-container">
        {props.results.length > 0 && (
          <ul className="result">
            {props.results.map((movie, index) => (
              <React.Fragment key={index}>
                <MovieCards movie={movie} />
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
      <div>
        <form id="form-container" onSubmit={handleSubmit}>
          <input
            id="searchbar"
            placeholder="Search Hollywood"
            value={props.movies}
            type="text"
            onChange={(e) => props.setMovies(e.target.value)}
          />
          <Link to={`/search`}>
            <button type="submit">Search</button>
          </Link>
          <Route path={`/search/${props.movies}`}></Route>
        </form>
      </div>
    </div>
  );
}
export default SearchForm;
