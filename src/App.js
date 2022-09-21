import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Multiclassifier from "./components/Multiclassifier";
import { CssBaseline } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Lato, "sans-serif"',
          h1: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.8rem",
          },
          h2: {
            fontWeight: "bold",
            fontSize: "1.3rem",
          },
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Multiclassifier />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
