import React, { useState } from "react";
import { Button, Card, CardMedia, Menu, MenuItem, Link, Typography } from "@mui/material";
import treelogo from "./media/treelogo.jpeg";

function TreeMenu({user, setUser}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <Button onClick={handleClick}>
        <Card sx={{ width: "50px" }}>
          <CardMedia component="img" image={treelogo}></CardMedia>
        <Typography sx={{fontFamily: "fantasy"}}>
        <strong>Menu</strong>

      </Typography>
        </Card>

      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem component={Link} href="/allresidents">Residents </MenuItem>
        <MenuItem component={Link} href="/resident_intake">New Resident</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default TreeMenu;
