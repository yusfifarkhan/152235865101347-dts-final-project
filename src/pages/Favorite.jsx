import React, { useEffect, useState } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import FavoriteList from "../containers/FavoriteList";
import { db } from "../services/fireBase";
import { collection, getDocs, query, where } from "firebase/firestore";
import StarIcon from "@mui/icons-material/Star";

const Favorite = ({ user, navHandler }) => {
  const [favorites, setFavorites] = useState();
  useEffect(() => {
    const getUserFavoriteGame = async () => {
      const q = await query(
        collection(db, "favorites"),
        where("name", "==", user)
      );
      const data = await getDocs(q);
      setFavorites(data.docs.map((doc) => ({ ...doc?.data(), id: doc?.id })));
    };
    getUserFavoriteGame();
  }, [user]);
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "2rem",
      }}
    >
      <Card sx={{ height: "74vh", minHeight: "74vh" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StarIcon />
          <Typography variant="h5">
            You Have {favorites?.length} Favorite Games
          </Typography>
        </CardContent>
        <CardContent sx={{ overflowY: "scroll", maxHeight: "50vh" }}>
          <FavoriteList
            favoriteGames={favorites}
            navHandler={navHandler}
            user={user}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Favorite;
