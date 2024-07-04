import React from "react";
import jobs from "../data/jobs.json";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

function JobDetail() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job)
    return (
      <Typography variant="h3" marginTop={10}>
        No Job Found
      </Typography>
    );

  return (
    <Container>
      <Typography variant="h3" marginTop={10}>
        {job.title}
      </Typography>
    </Container>
  );
}

export default JobDetail;
