import axios from "axios";
import { airtableBaseURL, config } from "../services";

function MovieCards(props) {
  const title = props.movie.title;
  const poster = `https://image.tmdb.org/t/p/w200${props.movie.poster_path}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Movie was added!");
    try {
      const addMovie = {
        title,
        poster,
      };
      await axios.post(airtableBaseURL, { fields: addMovie }, config);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card-container">
      <div className="poster-container">
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        {props.movie.poster_path ? (
          <img
            alt="poster"
            src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          />
        ) : (
          <div className="temp-poster"></div>
        )}
      </div>
      <div className="add-button">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="button">
            Add to Watch List
          </button>
        </form>
      </div>
    </div>
  );
}
export default MovieCards;
