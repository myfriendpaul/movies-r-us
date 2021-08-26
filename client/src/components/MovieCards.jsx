import axios from "axios";
import { airtableBaseURL, config } from "../services";
import "./MovieCards.css";
import { Button } from "@material-ui/core";

function MovieCards(props) {
  const title = props.movie.title;
  const poster_path = props.movie.poster_path;

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Movie was added!");
    try {
      const addMovie = {
        title,
        poster_path,
      };
      await axios.post(airtableBaseURL, { fields: addMovie }, config);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="cards">
      <div className="card">
        {props.movie.poster_path ? (
          <img
            class="card-image"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          />
        ) : (
          <img
            class="card-image"
            alt="poster not found"
            src={"https://imgur.com/iw3XbpF.png"}
          />
        )}
        <form className="form-container" onSubmit={handleSubmit}>
          <Button variant="contained" color="primary" type="submit">
            Add to Watchlist
          </Button>
        </form>
      </div>
    </div>
  );
}
export default MovieCards;

{
  /* <h2 className="title">{title}</h2> */
}
