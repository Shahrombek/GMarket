import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = (mode) =>
  createTheme({
    palette: {
      primary: {
        main: orange[500],
        contrastText: "#fff",
      },
    },
  });

export default theme;
