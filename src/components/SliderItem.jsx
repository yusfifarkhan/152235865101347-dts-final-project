import React from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReadMore } from "@mui/icons-material";

const SliderItem = ({ id, imageUrl, title, rating, platforms }) => {
  let navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        height: { xs: "100", sm: "100", md: "70vh" },
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        width="240"
        sx={{
          width: { md: "40vw" },
          height: {
            xs: "26vh",
            sm: "40vh",
            md: "100vh",
          },
          maxHeight: {
            xs: "26vh",
            sm: "40vh",
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Box
            mb={"0.5rem"}
            sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
          >
            Platforms:
            {platforms.map((platform) => (
              <Chip
                label={platform.platform.name}
                variant="outlined"
                size="small"
              />
            ))}
          </Box>

          <Rating name="read-only" value={rating} precision={0.1} readOnly />
        </CardContent>
        <CardActions sx={{ display: "flex", width: "100%" }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{ width: "20vw" }}
            onClick={() => navigate(`/games/${id}`)}
          >
            <ReadMore />
            &nbsp; More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default SliderItem;
