import React, { useState, useEffect } from "react";
// import { Card } from "./StyleElements";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import ResidentFullProfile from "./ResidentFullProfile";
import ResActivities from "./ResActivities";
import leaf2 from "./media/leaf2.jpeg";

function Resident({ resident, activity, onActClick, showActivities }) {
  const {
    id,
    name,
    date_of_birth,
    phone,
    email,
    image,
    resident_therapist,
    res_activities,
  } = resident;

  return (
    <div>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            width: "220px",
            height: "300px",
            padding: "40px",
            borderRadius: "16px",
            border: 1,
            margin: "10px",
            backgroundImage: `url(${leaf2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            // className="resident-profile"

            alignItems="center"
            display="flex"
            // margin="auto"
            flexDirection="column"
            flexGrow="1"
          >
            <Avatar
              alt={name}
              src={image}
              sx={{ width: 150, height: 150 }}
            ></Avatar>
          </Box>

          <CardContent
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Link to={`/residents/${id}`}>
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  textAlign: "center",
                  fontFamily: "fantasy",
                }}
              >
                {name}
              </Typography>
            </Link>
            <br />
            <Link to={`/residents/${id}`}>
              <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "auto",
                  marginLeft: "30px",
                  marginBottom: "20px",
                  fontFamily: "fantasy",
                }}
                onClick={() => onActClick(true)}
              >
                Activities
              </Button>
            </Link>

            <Typography
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                textAlign: "center",
                justifyContent: "center",
                margin: "auto",
                padding: "2px",
                marginBottom: "20px",
                width: "200px",
                fontFamily: "fantasy",
              }}
            >
              Mentor: {resident_therapist}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Resident;
