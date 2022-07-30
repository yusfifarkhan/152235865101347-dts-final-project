import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";

const FormSignin = ({
  email,
  emailHandler,
  password,
  passwordHandler,
  onSubmitHandler,
}) => {
  let navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Card sx={{ padding: "1.5rem" }}>
        <CardContent
          sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Login />
          <Typography variant="h5">Sign In!</Typography>
        </CardContent>
        <CardContent>
          <form
            id="signInForm"
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              onChange={(e) => emailHandler(e.target.value)}
              value={email}
              label="Email"
              size="small"
              sx={{ width: "100%" }}
            />
            <TextField
              onChange={(e) => passwordHandler(e.target.value)}
              value={password}
              label="Password"
              type="password"
              size="small"
              sx={{ width: "100%" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Login !
            </Button>
            <Box mt="2rem">
              <Typography variant="body" mr="1rem">
                Don't have an account?
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate("/signup")}
              >
                Register!
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormSignin;
