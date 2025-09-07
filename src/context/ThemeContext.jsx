import React, {createContext, useState } from "react"
import { DarkTheme, LightTheme } from "../utility/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(DarkTheme);

    const toggleTheme = () => {
        setTheme(theme === DarkTheme ? DarkTheme : LightTheme);
    }
    return( 
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}