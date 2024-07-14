import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";
import AuthContext from "../auth/AuthContext";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleClick = (e) => {
    if (auth.user) {
      navigate(`/job/${job.id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <CardStyle onClick={handleClick}>
      <CardActionArea sx={{ color: (theme) => theme.palette.common.white }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          padding="5px"
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              {job.title}
            </Typography>
            <SkillsPaper skills={job.skills} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              City: {job.city}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              Salary: ${job.salaryLow} - ${job.salaryHigh}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              Description: {job.description}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </CardStyle>
  );
}
