import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ theme, setTheme }) => {
  return (
    <Box
      component="div"
      className="flex justify-between items-center py-2"
      maxWidth="lg"
    >
      <Box component="div" className="flex items-center">
        <IconButton size="large" color="inherit">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" component="h1">
          Github Repositories
        </Typography>
      </Box>

      <Box>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          <DarkModeIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
