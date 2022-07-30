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
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const FormSignup = ({
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
          <PersonAddAlt1Icon />
          <Typography variant="h5">Register!</Typography>
        </CardContent>
        <CardContent>
          <form
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
              Register !
            </Button>
            <Box mt="2rem">
              <Typography variant="body" mr="1rem">
                Already have an account?
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In!
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormSignup;
