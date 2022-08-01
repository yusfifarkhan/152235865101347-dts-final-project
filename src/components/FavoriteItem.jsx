import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router-dom";
import { db } from "../services/fireBase";
import {
  collection,
  query,
  getDocs,
  doc,
  deleteDoc,
  where,
} from "firebase/firestore";

const FavoriteItem = ({ data, user, navHandler }) => {
  let navigate = useNavigate();
  const onDeleteHandler = async () => {
    try {
      const q = await query(
        collection(db, "favorites"),
        where("name", "==", user),
        where("gameId", "==", JSON.parse(data.data)?.id)
      );
      const checkData = await getDocs(q);
      const response = checkData.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .map((doc) => doc.id)[0];
      if (response) {
        const deleteData = await deleteDoc(doc(db, "favorites", response));
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card>
        <CardActionArea
          sx={{ display: "flex" }}
          onClick={(e) => navHandler(`/games/${JSON.parse(data.data)?.id}`)}
        >
          <CardMedia
            component="img"
            image={JSON.parse(data.data)?.background_image}
            alt={JSON.parse(data.data)?.name}
            sx={{
              width: { xs: "20vh", md: "30vh" },
              height: {
                xs: "20vh",
                md: "30vh",
              },
              maxHeight: {
                xs: "20vh",
                md: "30vh",
              },
            }}
            loading="lazy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {JSON.parse(data.data)?.name}
            </Typography>
            <Rating
              name="read-only"
              value={JSON.parse(data.data)?.rating}
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
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {JSON.parse(data.data)?.description_raw}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="warning"
            sx={{ width: "100%" }}
            onClick={(e) => {
              onDeleteHandler(user, JSON.parse(data.data)?.id);
            }}
          >
            <RemoveCircleOutlineIcon /> &nbsp; Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FavoriteItem;
