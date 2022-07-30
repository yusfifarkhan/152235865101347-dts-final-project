import React, { useEffect, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import GamesList from "../containers/GamesList";
import rawgApi from "../services/rawgAPI";
import Spinner from "../components/Spinner";

const Games = ({ handleNav }) => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchDataGames = async (query) => {
      try {
        let response;
        if (!query.length) {
          response = await rawgApi.get("/games");
        } else if (query.length) {
          setGames([]);
          response = await rawgApi.get(`/games?search=${query.toLowerCase()}`);
        }
        setGames(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataGames(search);
  }, [search]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        overflow: "auto",
      }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 1, md: 1 }}
    >
      <Box
        mb="1rem"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
        bgcolor={"#fff"}
      >
        <Typography variant="h5">Best Games</Typography>
        <TextField
          id="search"
          type="text"
          label="Search"
          value={search}
          variant="outlined"
          placeholder="Keyword"
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: { xs: "100%", md: "auto" } }}
        />
      </Box>
      {games.length ? (
        <GamesList handleNav={handleNav} games={games} />
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Games;
