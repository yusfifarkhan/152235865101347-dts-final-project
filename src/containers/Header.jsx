import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import GamesIcon from "@mui/icons-material/Gamepad";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { pages } from "../utils/pages";
import UserMenu from "../components/UserMenu";

const Header = ({ navHandler, user }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageChange = (addr) => {
    navHandler(addr.toLowerCase());
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1e293b" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <GamesIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
            onClick={() => navHandler("/")}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => navHandler("/")}
          >
            GoodGames
          </Typography>
          {/* End Logo */}

          {/* Responsive Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    navHandler(`/${page}`);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* End Responsive Menu */}

          {/* Mobile Logo */}
          <GamesIcon
            edge="start"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            onClick={() => navHandler("/")}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navHandler("/")}
          >
            GoodGames
          </Typography>

          {/* End Mobile Logo */}

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navHandler(`/${page}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* End Desktop Menu */}

          {/* User Menu */}
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
              {user ? `Hi, ${user.email?.split("@")[0]}` : ""}
            </Typography>
            <Tooltip title="Open user settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src={<PersonIcon />}
                  alt={user?.email?.split("@")[0].toUpperCase()}
                  sx={{ backgroundColor: "orange" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <UserMenu
                handlePageChange={handlePageChange}
                handleCloseUserMenu={handleCloseUserMenu}
                user={user}
              />
            </Menu>
          </Box>
          {/* End User Menu */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
