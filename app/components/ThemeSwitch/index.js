import React from "react";
import { ThemeSwitch } from "./styles";

function ThemeToggle({ currentTheme, setCurrentTheme }) {
  const switcher = () =>
    currentTheme === "darkTheme"
      ? setCurrentTheme("lightTheme")
      : setCurrentTheme("darkTheme");
  return (
    <ThemeSwitch>
      <label className="switch">
        <input type="checkbox" onChange={switcher} />
        <span className="slider round"></span>
      </label>
    </ThemeSwitch>
  );
}

export default ThemeToggle;
