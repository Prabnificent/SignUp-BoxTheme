import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Box from "./components/Box";
import "./App.css";

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [viewType, setViewType] = useState("grid");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSignup = () => setIsLoggedIn(true);
  const toggleViewType = () => setViewType((prev) => (prev === "grid" ? "list" : "grid"));

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleViewType}>Toggle View</button>
      {!isLoggedIn ? (
        localStorage.getItem("email") ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Signup onSignup={handleSignup} />
        )
      ) : (
        <Box viewType={viewType} />
      )}
    </div>
  );
}

// Wrap MainApp in ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
