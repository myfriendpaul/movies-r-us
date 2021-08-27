import React, { useState } from "react";
import "./Toggle.css";
import { airtableBaseURL, config } from "../services";
import axios from "axios";

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(props.movie.fields.checked);
  // console.log(props.movie.fields.checked);

  const handleChange = async () => {
    setChecked((prev) => !prev);
    const newMovie = { ...props.movie.fields, checked: checked };
    await axios.put(
      `${airtableBaseURL}/${props.movie.id}`,
      { fields: newMovie },
      config
    );
    props.setToggleFetch((prev) => !prev);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;
