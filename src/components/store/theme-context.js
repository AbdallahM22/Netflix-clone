import { createContext, useState } from "react";

const darkMode = JSON.parse(localStorage.getItem("theme"));

const ThemeContext = createContext({
  input: "",
  dark: darkMode,
  toggleMode: () => {},
  inputHandler: (input) => {},
});

export const ThemeContextProvider = (props) => {
  const [dark, setDark] = useState(darkMode);
  const [input, setInput] = useState("");
  const toggleMode = () => {
    setDark((prevState) => !prevState);
    localStorage.setItem("theme", !dark)
  };
  const inputHandler = (input) => {
    setInput(input);
  };

  const value = {
    input,
    dark,
    toggleMode,
    inputHandler,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
