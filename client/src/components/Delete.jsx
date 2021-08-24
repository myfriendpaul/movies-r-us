import { airtableBaseURL, config } from "../services";
import axios from "axios";

function Delete(props) {
  const handleDelete = async () => {
    await axios.delete(airtableBaseURL / `${props.movie}`, config);
  };
  return (
    <div>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default Delete;
