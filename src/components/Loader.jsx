import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loader = ({ color }) => {
  return (
    <Box component="div" className="flex justify-center items-center py-5">
      <CircularProgress color={color} />
    </Box>
  );
};

export default Loader;
