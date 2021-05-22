import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const buttonText =
    btnColor === "MediumVioletRed"
      ? `Change to ${replaceCamelWithSpaces("MidnightBlue")}`
      : `Change to ${replaceCamelWithSpaces("MediumVioletRed")}`;
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : btnColor }}
        onClick={(e) => setBtnColor("MidnightBlue")}
        disabled={disabled}
      >
        {buttonText}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={() => setDisabled((disabled) => !disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
