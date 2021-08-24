import Delete from "./Delete";

function WatchListCards(props) {
  return (
    <div className="card-container">
      <div className="poster-container">
        {props.list.fields.poster ? (
          <img
            className="movie-posters"
            alt="poster"
            src={props.list.fields.poster}
          />
        ) : (
          <div className="temp-poster"></div>
        )}
      </div>
      <div className="title-container">
        <h2 className="title">{props.list.fields.title}</h2>
      </div>
      <div>
        <Delete />
      </div>
    </div>
  );
}
export default WatchListCards;
