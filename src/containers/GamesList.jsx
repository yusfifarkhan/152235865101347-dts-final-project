import React from "react";
import { Grid } from "@mui/material";
import GridItem from "../components/GridItem";

const GamesList = ({ handleNav, games }) => {
  return (
    <Grid container spacing={3} maxWidth={"lg"} minHeight="72vh">
      {games.map((game, i) => (
        <GridItem key={i} data={game} handleNav={handleNav} />
      ))}
    </Grid>
  );
};

export default GamesList;
