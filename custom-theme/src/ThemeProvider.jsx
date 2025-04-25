import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }) => {
    console.log('21', "theme")
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((darkMode) => !darkMode);
    };

    const theme = darkMode ? "dark" : "light";

  
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;