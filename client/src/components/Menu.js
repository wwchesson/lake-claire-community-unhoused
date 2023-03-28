import React, { useState } from "react";
import { Button, Card, CardMedia, Menu, MenuItem, Link } from "@mui/material";
import treelogo from "./media/treelogo.jpeg";

function TreeMenu() {
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

  return (
    <div>
      <Button onClick={handleClick}>
        <Card sx={{ width: "50px" }}>
          <CardMedia component="img" image={treelogo}></CardMedia>
        </Card>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem component={Link} href="/residents">Residents </MenuItem>
        <MenuItem component={Link} href="/resident_intake">New Resident</MenuItem>
      </Menu>
    </div>
  );
}

export default TreeMenu;
