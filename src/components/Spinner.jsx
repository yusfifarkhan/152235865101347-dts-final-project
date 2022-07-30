import React from "react";
import { Container } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        height: "72vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="success" />
    </Container>
  );
};

export default Spinner;
