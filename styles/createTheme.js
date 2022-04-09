import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const ThemeContext = (Mode) =>
  createTheme({
    palette: {
      mode: Mode,
      primary: {
        main: "rgb(36, 153, 239)",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

export default ThemeContext;
