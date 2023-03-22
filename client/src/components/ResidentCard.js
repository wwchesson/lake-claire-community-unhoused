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

function Resident({ resident, activity, onActClick, showActivities }) {

  const { id, name, date_of_birth, phone, email, image, resident_therapist, res_activities } = resident;

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
              marginLeft: "10px"
              // display: "flex",
            }}
          >
            <Link to={`/residents/${id}`}>
              <Typography variant="h6">{name}</Typography>
            </Link>
            <br />
            <Link to={`/residents/${id}`}>
            <Button onClick={() => onActClick(true)}>
              Activities
            </Button>

            </Link>


            {/* <Link to={`/residents/${id}`} >
            <Typography>
              Activities
            </Typography>
            </Link> */}

            <br />
            <Typography>
              Mentor: {resident_therapist}
            </Typography>
          </CardContent>
        </Card>

        {/* <Card>
        <h3>
          <strong>{name}</strong>
        </h3>
        <h4>Date of Birth: {date_of_birth}</h4>
        <h4> Phone: {phone}</h4>
        <h4>Email Address: {email}</h4>
        <br />
        {/* <h4>Activities: </h4>{showAct()}
      <h4>Dorm:</h4>{showDorm()}
      <h4>Counselor:</h4>{showCounselor()} */}
        {/*
        <h4>
          <Link to={`/residents/${id}`}>Click to update resident</Link>
        </h4>
      </Card> */}
      </Grid>
    </div>
  );
}

export default Resident;
