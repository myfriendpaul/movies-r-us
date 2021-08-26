import Delete from "./Delete";
import ToggleSwitch from "./Toggle";
import "./WatchListCards.css";

function WatchListCards(props) {
  return (
    <div className="cards2">
      <div className="card2">
        {props.item.fields.poster_path.includes("https") ? (
          <img
            className="card-image2"
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
        <form className="form-container2">
          <div className="toggle">
            <ToggleSwitch movie={props.item} />
            <p>Currently Watching</p>
          </div>
          <div className="delete">
            <Delete movie={props.item} setToggleFetch={props.setToggleFetch} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default WatchListCards;
