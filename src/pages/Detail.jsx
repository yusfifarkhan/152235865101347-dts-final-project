import React from "react";
import { Container } from "@mui/material";
import DetailItem from "../components/DetailItem";

const Detail = ({ handleNav, user }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        minHeight: "73vh",
      }}
    >
      <DetailItem handleNav={handleNav} user={user} />
    </Container>
  );
};

export default Detail;
