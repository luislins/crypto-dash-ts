import { ChangeEvent, createContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type ContextType = {
  activeMenu?: boolean;
  setActiveMenu: (value: boolean) => void;
  currentMode: string;
  setCurrentMode: (value: string) => void;
  screenSize: number | null;
  setScreenSize: (value: number | null) => void;
  themeSettings?: boolean;
  setThemeSettings: (value: boolean) => void;
  setMode: (value: ChangeEvent<HTMLInputElement>) => void;
};

const initialValue: ContextType = {
  screenSize: null,
  setActiveMenu: () => {},
  setCurrentMode: () => {},
  setScreenSize: () => {},
  setThemeSettings: () => {},
  setMode: () => {},
  currentMode: "white",
};

export const Context = createContext<ContextType>(initialValue);

export const ContextProvider = ({ children }: ContextProps) => {
  const [screenSize, setScreenSize] = useState<number | null>(null); // aqui era undefined
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);

  const setMode = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  return (
    <Context.Provider
      value={{
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        setActiveMenu,
        setCurrentMode,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
