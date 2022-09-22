import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Multiclassifier from "./components/Multiclassifier";
import SideBar from "./components/SideBar";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

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
          fontSize: 12,
          "@media (min-width:600px)": {
            fontSize: 14,
          },
          h1: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.4rem",
            "@media (min-width:600px)": {
              fontSize: "1.6rem",
            },
          },
          h2: {
            fontWeight: "bold",
            fontSize: "1.15rem",
            "@media (min-width:600px)": {
              fontSize: "1.3rem",
            },
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} sx={{ order: { xs: 0, md: 1 } }}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Multiclassifier />
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
