import { AppBar, Toolbar, Typography, Box, Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { Lightbulb } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#f5f5f5",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        position: "static",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Lightbulb sx={{ color: "#ff9800", fontSize: 30 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            ideaVerse
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            justifyContent: "right",
            width: "100%",
            "& a": {
              textDecoration: "none",
              color: "inherit",
              fontSize: "16px",
              fontWeight: 500,
              position: "relative",
              transition: "color 0.3s",
            },
            "& a.active": {
              color: "#ff9800",
            },
            "& a::after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "2px",
              backgroundColor: "#ff9800",
              bottom: -4,
              left: 0,
              transition: "width 0.3s",
            },
            "& a:hover::after": {
              width: "100%",
            },
          }}
        >
          <NavLink to="/" end>
            HOME
          </NavLink>
          <NavLink to="/about">
            ABOUT
          </NavLink>
          <NavLink to="/contact">
            CONTACT
          </NavLink>
        </Box>
        
        <Button
          variant="contained"
          sx={{
            color: "white",
            ml:"30px",
            bgcolor: "red",
            "&:hover": {
              bgcolor: "White",
              color: "red",
            },
          }}
          onClick={handleLogoutClick}
        >
          LOGOUT
        </Button>
      </Toolbar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleConfirmLogout} sx={{color:"red"}}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
