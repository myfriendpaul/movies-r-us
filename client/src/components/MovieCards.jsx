import axios from "axios";
import { airtableBaseURL, config } from "../services";
import { useParams } from "react-router-dom";

function MovieCards(props) {
  const { title, poster_path: poster } = props.movie;
  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addMovie = {
      title,
      poster,
    };
    await axios.post(airtableBaseURL, { fields: addMovie }, config);
  };
  return (
    <div className="card-container">
      <div className="poster-container">
        {props.movie.poster_path ? (
          <img
            alt="poster"
            src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          />
        ) : (
          <div className="temp-poster"></div>
        )}
      </div>
      <div className="title-container">
        <h2 className="title">{props.movie.title}</h2>
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
