import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import FavoriteItem from "../components/FavoriteItem";

const FavoriteList = ({ favoriteGames, navHandler, user }) => {
  return (
    <Box
      minHeight="72vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {favoriteGames?.length ? (
        favoriteGames?.map((game) => (
          <FavoriteItem
            key={game.id}
            data={game}
            navHandler={navHandler}
            user={user}
          />
        ))
      ) : favoriteGames ? (
        <>
          <Typography variant="body">You have no favorites</Typography>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </>
      )}
    </Box>
  );
};

export default FavoriteList;
