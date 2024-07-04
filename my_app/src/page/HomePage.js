import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import api from "../data/fetchData";
import { Container, Grid, Pagination, styled } from "@mui/material";

const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));
function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      <Grid container spacing={2}>
        {jobs.slice(0, 5).map((job) => (
          <Grid key={job.id} item xs={12} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <CentterPagination
        sx={{ marginTop: "15px" }}
        count={pagesTotal}
        color="primary"
        onChange={(event, value) => {
          setPage(value);
        }}
      />
    </Container>
  );
}

export default HomePage;
