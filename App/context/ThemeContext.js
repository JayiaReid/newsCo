import React from 'react';
import Color from '../Shared/Color';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = React.useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const theme = isLightTheme ? Color.light : Color.dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
