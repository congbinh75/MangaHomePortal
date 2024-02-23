import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme ?? "light");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    setDarkModeOnLoad();
  }, []);

  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
    if (isDarkMode === true || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  function setDarkModeOnLoad() {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
    setTheme(isDarkMode ? "dark" : "light");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && prefersDarkMode)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }

  return (
    <div
      className="app min-h-screen flex flex-row bg-slate-50 text-black dark:bg-slate-950 dark:text-white"
      data-theme={theme}
    >
      <div className="flex-none">
        <Sidebar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
      </div>
      <div className="flex-1">
        <Home isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
      </div>
    </div>
  );
};

export default App;
