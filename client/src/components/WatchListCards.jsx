import Delete from "./Delete";
import ToggleSwitch from "./Toggle";

function WatchListCards(props) {
  return (
    <div className="card-container2">
      <div className="poster-container2">
        <br />
        <br />
        <br />
        {props.item.fields.poster_path.includes("https") ? (
          <img
            className="movie-posters2"
            alt="poster"
            src={props.item.fields.poster_path}
          />
        ) : (
          <img
            className="movie-posters2"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w200${props.item.fields.poster_path}`}
          />
        )}
      </div>
      <div className="title-container2">
        <h2 className="title2">{props.item.fields.title}</h2>
      </div>
      <div>
        <ToggleSwitch movie={props.item} />
        <Delete movie={props.item} setToggleFetch={props.setToggleFetch} />
      </div>
    </div>
  );
}
export default WatchListCards;
