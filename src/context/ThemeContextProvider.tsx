import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark"
}

interface ThemeProviderType {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeProviderType>({
  theme: ThemeType.LIGHT,
  setTheme: () => {}
});

interface ThemeProviderProps {
  children: JSX.Element;
}

const ThemeProvider: FC<ThemeProviderProps> = props => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
