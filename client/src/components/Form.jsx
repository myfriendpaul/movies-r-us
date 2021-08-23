import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Search from "./Search";

function Form() {
  const [movies, setMovies] = useState("");

  const handleSubmit = (event) => event.preventDefault();

  return (
    <>
      <form id="form-container" onSubmit={handleSubmit}>
        <input
          id="searchbar"
          placeholder="Search Hollywood"
          value={movies}
          type="text"
          onChange={(e) => setMovies(e.target.value)}
        />
        <Link to={`/search/${movies}`}>
          <button type="submit">Search</button>
        </Link>
        <Route path={`/search/${movies}`}>
          <Search movies={movies} />
        </Route>
      </form>
    </>
  );
}

export default Form;
