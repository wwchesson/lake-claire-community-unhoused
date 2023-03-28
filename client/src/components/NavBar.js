import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
  Button,
} from "@mui/material";
import TreeMenu from "./Menu";
import treelogo from "./media//treelogo.jpeg";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Card
      // id="welcome-card"
      sx={{ height: "110px", alignItems: "center", backgroundColor: "green" }}
    >
      <CardContent>
        <TreeMenu user={user} setUser={setUser}/>

        {/* <Box
          sx={{
            display: "flex",
            position: "absolute",
            right: "20px",
            justifyContent: "space-evenly",
          }}
        > */}
        {/* <Typography variant="h6" sx={{ marginRight: "30px" }}>
            <Link
              href="/residents"
              style={{ color: "white", fontFamily: "fantasy" }}
            >
              <strong>Residents</strong>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link
              href="/resident_intake"
              style={{
                color: "white",
                fontFamily: "fantasy",
                marginRight: "15px",
              }}
            >
              <strong>New Resident</strong>
            </Link>
          </Typography> */}
        {/* </Box> */}

      </CardContent>
    </Card>
  );
}

export default NavBar;
