import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReadMore } from "@mui/icons-material";

const GridItem = ({ data }) => {
  let navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={data.background_image}
          alt={data.name}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Rating
            name="read-only"
            value={data.rating}
            precision={0.1}
            readOnly
          />
        </CardContent>
        <CardActions sx={{ display: "flex", width: "100%" }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => navigate(`/games/${data.id}`)}
          >
            <ReadMore />
            &nbsp; More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridItem;
