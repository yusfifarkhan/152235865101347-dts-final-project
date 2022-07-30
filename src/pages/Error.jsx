import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const Error = ({ error }) => {
  let navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "2rem",
        height: "73vh",
        textAlign: "center",
      }}
    >
      {error === "denied" ? (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              403 - Access Forbiden!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sorry, you have to be logged in to access this page. But, no
              worries! You can find more in Our Homepage!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{ width: "100%" }}
              onClick={(e) => navigate("/")}
            >
              <Home />
              &nbsp; Homepage!
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              404 - Not Found!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Sorry, we can't found that page.</p>
              <p>You'll find more interesting stuff on Our Hompage</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{ width: "100%" }}
              onClick={(e) => navigate("/")}
            >
              <Home />
              &nbsp; Homepage!
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default Error;
