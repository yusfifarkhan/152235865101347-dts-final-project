import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import { logOut } from "../services/fireBase";
import { Favorite, Login, Logout, PersonAddAlt1 } from "@mui/icons-material";

const UserMenu = ({ handlePageChange, handleCloseUserMenu, user }) => {
  const navigate = useNavigate();
  if (user) {
    return (
      <>
        <MenuItem
          onClick={() => {
            handlePageChange("/favorite");
            handleCloseUserMenu();
          }}
        >
          <Favorite /> &nbsp;
          <Typography textAlign="center">Favorite</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
            handleCloseUserMenu();
            navigate("/");
          }}
        >
          <Logout /> &nbsp;
          <Typography textAlign="center">Sign Out</Typography>
        </MenuItem>
      </>
    );
  } else {
    return (
      <>
        <MenuItem
          onClick={() => {
            handlePageChange("/signin");
            handleCloseUserMenu();
          }}
        >
          <Login /> &nbsp;
          <Typography textAlign="center">Sign In!</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handlePageChange("/signup");
            handleCloseUserMenu();
          }}
        >
          <PersonAddAlt1 /> &nbsp;
          <Typography textAlign="center">Sign Up!</Typography>
        </MenuItem>
      </>
    );
  }
};

export default UserMenu;
