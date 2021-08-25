import ThemeToggle from "Components/ThemeSwitch";
import React from "react";
import "./styles";
import { StyledHeader } from "./styles";

function Header({ currentTheme, setCurrentTheme }) {
  return (
    <StyledHeader>
      <h1 className="title">P O K I M A N E</h1>
      <ThemeToggle
        className="toggle"
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </StyledHeader>
  );
}

export default Header;
