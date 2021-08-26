import React, { useState } from "react";
import "./Toggle.css";

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const onToggle = () => setChecked(!checked);

  return (
    <label className="toggle-switch">
      <input
        label="Currently Watching"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <p></p>
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;
