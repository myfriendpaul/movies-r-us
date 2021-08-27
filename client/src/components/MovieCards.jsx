// import { useState } from "react";
// import axios from "axios";
// import { airtableBaseURL, config } from "../services";
// import "./MovieCards.css";
// import { Button } from "@material-ui/core";
// import Snackbar from "@material-ui/core/Snackbar";

// function MovieCards(props) {
//   const title = props.movie.title;
//   const poster_path = props.movie.poster_path;
//   const [alert, setAlert] = useState({
//     open: false,
//     vertical: "top",
//     horizontal: "center",
//   });

//   const { vertical, horizontal, open } = alert;

//   const handleClick = (newAlert) => () => {
//     setAlert({ open: true, ...newAlert });
//   };

//   const handleClose = () => {
//     setAlert({ ...alert, open: false });
//   };

//   const buttons = (
//     <>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick({ vertical: "top", horizontal: "center" })}
//       >
//         Add to Watchlist
//       </Button>
//     </>
//   );

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const addMovie = {
//         title,
//         poster_path,
//       };
//       await axios.post(airtableBaseURL, { fields: addMovie }, config);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div className="cards">
//       <div className="card">
//         {props.movie.poster_path ? (
//           <img
//             class="card-image"
//             alt="poster"
//             src={`https://image.tmdb.org/t/p/w300${poster_path}`}
//           />
//         ) : (
//           <img
//             class="card-image"
//             alt="poster not found"
//             src={"https://imgur.com/iw3XbpF.png"}
//           />
//         )}
//         <form className="form-container" onSubmit={handleSubmit}>
//           {buttons}
//         </form>
//       </div>
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="Movie added to watch list!"
//         key={vertical + horizontal}
//       />
//     </div>
//   );
// }
// export default MovieCards;

import axios from "axios";
import { airtableBaseURL, config } from "../services";
import "./MovieCards.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

function MovieCards(props) {
  const title = props.movie.title;
  const poster_path = props.movie.poster_path;
  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = alert;

  const handleClick = (newAlert) => () => {
    setAlert({ open: true, ...newAlert });
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("Movie was added!");
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
    <div className="card-container">
      <div className="poster-container">
        {props.movie.poster_path ? (
          <img
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
      </div>
      <div className="add-button">
        <form className="form-container" onSubmit={handleSubmit}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClick({ vertical: "top", horizontal: "center" })}
          >
            Add to Watchlist
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Movie added to watch list!"
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
}
export default MovieCards;

{
  /* <button type="submit" className="button">
            Add to Watch List
          </button> */
}
