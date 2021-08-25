import React from "react";

function SearchForm(props) {
  const { results, movies, setMovies, handleSubmit } = props;
  return (
    <div>
      <div className="search-container">
        <div>
          <form id="form-container" onSubmit={handleSubmit}>
            <input
              id="searchbar"
              placeholder="Search Hollywood"
              value={movies}
              type="text"
              onChange={(e) => setMovies(e.target.value)}
            />

            <button className="button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SearchForm;
