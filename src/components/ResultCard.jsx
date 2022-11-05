import React, { forwardRef } from "react";
import { Box, Card, CardContent, Typography, Link, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import _ from "lodash";
import numeral from "numeral";
import moment from "moment";

const ResultCard = ({ repo }, ref) => {
  return (
    <Card className="mb-3" ref={ref}>
      <CardContent>
        <Box className="flex justify-between items-center">
          <Link href={repo.html_url} target="_blank">
            <Typography variant="h6" className="font-semibold" gutterBottom>
              {repo.full_name}
            </Typography>
          </Link>

          <Box className="flex justify-between items-center">
            <Box component="span" className="flex items-bottom mr-1">
              <StarIcon fontSize="small" className="text-yellow-400 mr-1" />{" "}
              {numeral(repo.stargazers_count).format(
                repo.stargazers_count > 1000 ? "0.0a" : "0"
              )}
            </Box>

            <Box component="span" className="flex items-bottom">
              <ForkRightIcon fontSize="small" />{" "}
              {numeral(repo.forks_count).format(
                repo.forks_count > 1000 ? "0.0a" : "0"
              )}
            </Box>
          </Box>
        </Box>

        <Typography variant="body2" gutterBottom>
          {repo.description}
        </Typography>

        <Box component="div" className="flex flex-wrap gap-1 my-2">
          {repo.topics.map((topic, key) => (
            <Chip
              key={key}
              label={topic}
              size="small"
              color="secondary"
              variant="outlined"
            />
          ))}
        </Box>

        <Box component="div" className="flex justify-between">
          <Box component="div">
            <Typography variant="caption" gutterBottom className="mr-3">
              Last updated {moment(repo.updated_at).fromNow()}
            </Typography>

            <Typography variant="caption" gutterBottom className="mr-3">
              {repo.has_issues
                ? "Has " + repo.open_issues + " open issues"
                : ""}
            </Typography>

            <Typography variant="caption" gutterBottom className="mr-3">
              {!_.isEmpty(repo.license) && repo.license.key != "other"
                ? repo.license.name
                : ""}
            </Typography>
          </Box>

          {repo.language && (
            <Chip label={repo.language} size="small" color="warning" />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default forwardRef(ResultCard);
