import React from "react";
import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box component="div" className="p-5">
      <Typography variant="h6" align="center">
        An error occured while trying to load data.
        <br />
        Please try again later.
      </Typography>
    </Box>
  );
};

export default Error;
