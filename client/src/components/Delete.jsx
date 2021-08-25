import { airtableBaseURL, config } from "../services";
import axios from "axios";

function Delete(props) {
  const handleDelete = async () => {
    await axios.delete(`${airtableBaseURL}/${props.movie.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };
  return (
    <div>
      <button className="button" type="submit" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
}

export default Delete;
