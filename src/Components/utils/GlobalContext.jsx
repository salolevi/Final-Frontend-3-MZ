import { createContext } from "react";
import { useState } from "react";

export const initialState = {
  themes: {
    light: {
      backgroundHome: "white",
      backgroundNav: "rgb(204, 204, 204)",
      color: "black",
      inverted: "invert(0)",
      cardBackground: "transparent",
      themeButtonIcon: "☀"
    },
    dark: {
      backgroundNav: "rgba(19, 20, 19, 0.7)",
      backgroundHome: "rgba(18, 18, 18, 0.59)",
      inverted: "invert(1)",
      color: "white",
      cardBackground: "#222",
      themeButtonIcon: "🌙",
    },
  },
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [Theme, setTheme] = useState(initialState.themes.light);
  const [pos, setPos] = useState('block')

  const handleThemeChange = () => {
    if (Theme === initialState.themes.dark) {
      setTheme(initialState.themes.light)
    }
    if (Theme === initialState.themes.light) {
      setTheme(initialState.themes.dark)

    }
  };

  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs") || [])
  );

  return (
    <ContextGlobal.Provider value={{ Theme, handleThemeChange, favs, setFavs, pos, setPos }}>
      {children}
    </ContextGlobal.Provider>
  );
};
