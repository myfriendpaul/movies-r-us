import Delete from "./Delete";
import ToggleSwitch from "./Toggle";

function WatchListCards(props) {
  return (
    <div className="card-container">
      <div className="poster-container">
        <br />
        <br />
        <br />
        {props.item.fields.poster_path.includes("https") ? (
          <img
            className="movie-posters"
            alt="poster"
            src={props.item.fields.poster_path}
          />
        ) : (
          <img
            className="movie-posters"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w200${props.item.fields.poster_path}`}
          />
        )}
      </div>
      <div className="title-container">
        <h2 className="title">{props.item.fields.title}</h2>
      </div>
      <div>
        <ToggleSwitch movie={props.item} />
        <Delete movie={props.item} setToggleFetch={props.setToggleFetch} />
      </div>
    </div>
  );
}
export default WatchListCards;
