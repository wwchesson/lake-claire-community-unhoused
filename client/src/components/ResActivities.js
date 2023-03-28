import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Container,
} from "@mui/material";
import greendots from "./media/greendots.jpg";

function ResActivities({ activities }) {
  const { id } = useParams();
  const [resAct, setResAct] = useState([]);
  const [res, setRes] = useState([]);
  const { name, image } = res;

  useEffect(() => {
    fetch(`${id}`)
      .then((r) => r.json())
      .then((data) => {
        setRes(data);
        setResAct(data.res_activities);
      });
  }, [id]);

  return (
    <Container
      sx={{
        backgroundImage: `url(${greendots})`,
        height: "100vh",
        position: "absolute",
      }}
    >
      <Card
        sx={{
          width: "300px",
          height: "350px",
          padding: "40px",
          borderRadius: "16px",

          border: 12,
          borderColor: "white",
          margin: "auto",
          marginTop: "75px",
          justifyContent: "center",
          backgroundColor: "#32a852",
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
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: "40px",
            // display: "flex",
          }}
        >
          <Typography variant="h6" color="white">
            <strong>{name}</strong>
          </Typography          >
          {resAct.map((act) => (
            <Typography key={act.id} color="white">
              {act.name} - {act.day_of_week} - {act.time_of_day}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default ResActivities;
