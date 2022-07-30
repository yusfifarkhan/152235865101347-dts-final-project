import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  CircularProgress,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import rawgApi from "../services/rawgAPI";
import { db } from "../services/fireBase";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { Favorite, ViewList, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DetailItem = ({ user }) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [detailGame, setDetailGame] = useState([]);
  const favRef = collection(db, "favorites");

  const addToFavgameHandler = async () => {
    const q = await query(
      favRef,
      where("name", "==", user),
      where("gameId", "==", detailGame.id)
    );
    const checkData = await getDocs(q);
    const data = checkData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    if (data.length) {
      setOpen(true);
    } else {
      const docData = {
        name: user,
        gameId: detailGame.id,
        data: JSON.stringify(detailGame),
      };
      addDoc(favRef, docData);
      setAdded(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAdded(false);
  };

  const url = window.location.href;
  const id = url.split("/games/")[1];

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const responseDetail = await rawgApi.get(`/games/${id}`);
        setDetailGame(responseDetail.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGameDetail(id);
  }, [id]);

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          You have already added it to your favorite games.
        </Alert>
      </Snackbar>
      <Snackbar open={added} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to your favorite games,
        </Alert>
      </Snackbar>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          height: { xs: "100%", md: "70vh" },
        }}
      >
        <CardMedia
          component="img"
          alt={detailGame.name}
          image={detailGame.background_image}
          sx={{
            width: { xs: "100%", sm: "40vw", md: "40vw" },
            height: {
              xs: "26vh",
              sm: "auto",
              md: "100vh",
            },
            maxHeight: {
              xs: "26vh",
              sm: "100%",
              md: "100vh",
            },
          }}
          loading="lazy"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {detailGame.name}
              </Typography>
              <Rating
                name="read-only"
                value={parseInt(detailGame.rating)}
                precision={0.1}
                readOnly
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {detailGame.description_raw ? (
                  detailGame.description_raw
                ) : (
                  <CircularProgress />
                )}
              </Typography>
            </Box>
            <Box mt={"3rem"}>
              <Box
                mb={"0.5rem"}
                sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                Platforms:
                {detailGame?.platforms?.map((element) => (
                  <Chip
                    label={element.platform.name}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
              <Box
                mb={"0.5rem"}
                sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                Developer:
                {detailGame?.developers?.map((element) => (
                  <Chip label={element.name} variant="outlined" size="small" />
                ))}
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ display: "flex", width: "100%" }}>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={(e) => addToFavgameHandler()}
            >
              <Favorite />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => navigate(`/games`)}
            >
              <ViewList />
              &nbsp; List Game
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => navigate(`/`)}
            >
              <Home />
              &nbsp; Home
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default DetailItem;
