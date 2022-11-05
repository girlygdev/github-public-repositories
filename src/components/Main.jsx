import React, { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { sampleData } from "./sample";
import _ from "lodash";
import Input from "@mui/material/Input";
import ResultCard from "./ResultCard";
import { Box, Typography } from "@mui/material";
import numeral from "numeral";
import useQuery from "../hooks/useQuery";
import SampleRes from "./SampleRes";

import Loader from "./Loader";
import Error from "./Error";
import LanguageSelect from "./LanguageSelect";

const Main = () => {
  const [query, setQuery] = useState("javascript");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, data, hasMore, error } = useQuery(query, pageNumber);

  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        // Observe visibile element to prep for nex set of data
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSelectChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <Box component="div" className="py-5">
      <Box className="m-3">
        <LanguageSelect handleChange={handleSelectChange} value={query} />
      </Box>

      {data.length ? (
        data.map((repo, key) => {
          if (data.length === key + 1) {
            return <ResultCard ref={lastElement} key={key} repo={repo} />;
          } else {
            return <ResultCard key={key} repo={repo} />;
          }
        })
      ) : !loading ? (
        <Typography
          variant="button"
          align="center"
          display="block"
          className="text-slate-600 my-5 font-bold"
        >
          No repository found.
        </Typography>
      ) : (
        ""
      )}

      {loading ? <Loader color="secondary" /> : ""}
      {error ? <Error /> : ""}
    </Box>
  );
};

export default Main;
