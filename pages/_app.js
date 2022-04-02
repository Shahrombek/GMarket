import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Layout from "../components/Layout";
import theme from "../styles/createTheme";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={theme(mode)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
