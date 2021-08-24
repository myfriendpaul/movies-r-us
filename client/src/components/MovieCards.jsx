function MovieCards(props) {
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
        <button className="button">Add to Watch List</button>
      </div>
    </div>
  );
}
export default MovieCards;
