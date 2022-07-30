import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <Box
        backgroundColor="#1e293b"
        sx={{ position: "fixed", bottom: 0, width: "100vw", margin: "auto" }}
        py="0.5rem"
        mt={"2rem"}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="p" color="white">
            DTS Kominfo - REA2A
          </Typography>
          <Typography
            variant="p"
            color="white"
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <VerifiedUser />
            Yusfi Farkhan 152235865101-347
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
