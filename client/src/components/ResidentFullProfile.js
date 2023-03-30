import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
} from "@mui/material";
import greendots from "./media/greendots.jpg";

function ResidentFullProfile() {
  const { id } = useParams();
  const [individualRes, setIndividualRes] = useState([]);

  const {
    name,
    image,
    email,
    date_of_birth,
    phone,
    resident_dorm,
  } = individualRes;

  useEffect(() => {
    fetch(`/residents/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setIndividualRes(data);
      });
  }, [id]);

  return (
    <Container
      sx={{
        backgroundImage: `url(${greendots})`,
        height: "100vh",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
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
          </Typography>
          <br />
          <Typography color="white">
            <strong>DOB: </strong>
            {date_of_birth}
          </Typography>
          <Typography color="white">
            <strong>Phone:</strong> {phone}
          </Typography>
          <Typography color="white">
            <strong>Email:</strong> {email}
          </Typography>
          <Typography color="white">
            <strong>Dorm:</strong> {resident_dorm}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ResidentFullProfile;
