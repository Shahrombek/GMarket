import { Box, ThemeProvider, Typography, Paper } from "@mui/material";
import React from "react";
import ThemeContext from "../styles/createTheme";

const Layout = () => {
  return (
    <ThemeProvider  theme={ThemeContext('light')}>
      <Paper sx={{minHeight: '100vh', border:'none', borderRadius: '0'}}>
        
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
