import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Typography } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "src/hintergrund.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
export default theme;