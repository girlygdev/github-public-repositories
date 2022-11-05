import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { programmingLanguages } from "../data/languages";

const LanguageSelect = ({ value, handleChange }) => {
  return (
    <FormControl className="block mb-5">
      <InputLabel id="language-label">Programming Language</InputLabel>
      <Select
        labelId="language-label"
        id="language-select"
        value={value}
        label="Language"
        onChange={handleChange}
        className="block"
      >
        {programmingLanguages.map((lang, key) => (
          <MenuItem key={key} value={lang.value}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
