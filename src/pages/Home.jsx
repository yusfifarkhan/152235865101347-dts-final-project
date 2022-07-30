import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Slider from "../containers/Slider";
import rawgApi from "../services/rawgAPI";
import Spinner from "../components/Spinner";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchDataGames = async () => {
      try {
        const response = await rawgApi.get("/games");
        const data = response.data.results
          .sort(() => {
            return 0.5 - Math.random();
          })
          .splice(1, 5);
        setGames(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataGames();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        height: { xs: "73vh" },
      }}
    >
      {games.length ? <Slider games={games} /> : <Spinner />}
    </Container>
  );
};

export default Home;
