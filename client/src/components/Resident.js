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
  Grid
} from "@mui/material";

function Resident({ resident, act }) {
  const { id, name, date_of_birth, phone, email, image } = resident;

  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch(`/residents/${id}`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setRes(data);
      });
  }, [id]);

  // function showDorm() {
  //   if (res.dorm != null) {
  //   return <h4>{res.dorm.name}</h4>
  //   } else {
  //     return <h4>No dorm</h4>
  //   }
  // }

  // function showAct() {
  //   if (act != null) {
  //     return <div>{act.map((activity) => <h4 key={activity.id}>{activity.name} - {activity.day_of_week} - {activity.time_of_day} - Teacher: {activity.teacher.name}</h4>)}</div>
  //   }
  // }

  //   function showCounselor() {
  //     if (res.counselor != null) {
  //       return <h4>{res.counselor.name}</h4>
  //     } else {
  //       return <h4>No counselor</h4>
  //     }
  // }

  return (
    <div>
      <Grid
      item xs={12} sm={6} md={4}
      >
        <Card
        sx={{width: "200px", height: "300px", padding: "40px", borderRadius: "16px", border: 1, margin: "10px"}}
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
          sx={{ width: 150, height: 150}}
        ></Avatar>
      </Box>

        <CardContent>
        <Typography>
          {name}
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
