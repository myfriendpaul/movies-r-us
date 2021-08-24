import { useState } from "react";
import { Link, Route } from "react-router-dom";
import { airtableBaseURL, config } from "../services";
import axios from "axios";

function CreateaMovie() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addMovie = {
      title,
      poster,
    };
    await axios.post(airtableBaseURL, { fields: addMovie }, config);
  };

  return (
    <div className="create-container">
      <form id="createamovie" onSubmit={handleSubmit}>
        <input
          id="createamovie-input"
          placeholder="Create Your Movie"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          id="createamovie-img"
          placeholder="Add your poster URL"
          value={poster}
          type="url"
          onChange={(e) => setPoster(e.target.value)}
        />
        <br />
        <Link to={`/watchlist`}>
          <button type="submit">Send to Hollywood</button>
        </Link>
        <Route path={`/watchlist`}></Route>
      </form>
    </div>
  );
}

export default CreateaMovie;
