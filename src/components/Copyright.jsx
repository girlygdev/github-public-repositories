import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" className="mt-5">
      {"Copyright © "}
      <Link color="inherit" href="https://girlygdev.github.io/portfolio/" target={"_blank"}>
        Girly Gado
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
