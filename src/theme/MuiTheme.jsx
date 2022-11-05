import React from 'react'
import { createTheme } from "@mui/material/styles"

const MuiTheme = ({ mode }) => {
  let theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return theme
}

export default MuiTheme