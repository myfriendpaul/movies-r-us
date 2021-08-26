import Delete from "./Delete";
import ToggleSwitch from "./Toggle";
import "./WatchListCards.css";

function WatchListCards(props) {
  return (
    <div className="cards2">
      <div className="card2">
        {props.item.fields.poster_path.includes("https") ? (
          <img
            className="movie-posters2"
            alt="poster"
            src={props.item.fields.poster_path}
          />
        ) : (
          <img
            className="card-image2"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w200${props.item.fields.poster_path}`}
          />
        )}
      </div>
      {/* <div className="title-container2">
        <h2 className="title2">{props.item.fields.title}</h2> */}
      {/* </div> */}
      <form className="form-container">
        <ToggleSwitch movie={props.item} />
        <Delete movie={props.item} setToggleFetch={props.setToggleFetch} />
      </form>
    </div>
  );
}
export default WatchListCards;
