import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import ThemeContext from "../styles/createTheme";
import { Box, Typography } from "@mui/material";
import "../styles/global.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={ThemeContext(mode)}>
      <Provider store={store}>
        <Head>
          <title>GMarket</title>
          <meta name="description" content="next app dashboard" />
          {/* <link
            rel="icon"
            href="https://uko-react.vercel.app/static/logo/logo.svg"
          /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Box
          sx={{
            maxWidth: "1920px",
            margin: "0 auto",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
