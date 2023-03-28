import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container
} from "@mui/material";
import greendots from "./media/greendots.jpg"

function ResidentFullProfile({ onActClick, showActivities }) {
  const { id } = useParams();
  const [individualRes, setIndividualRes] = useState([]);
  const [resAct, setResAct] = useState([])

  const {
    name,
    image,
    email,
    date_of_birth,
    phone,
    resident_dorm,
    res_activities,
  } = individualRes;

  useEffect(() => {
    fetch(`${id}`)
      .then((r) => r.json())
      .then((data) => {
        setIndividualRes(data);
        setResAct(data.res_activities)

      });
  }, [id]);



  return (
    <Container
    sx={{
      backgroundImage: `url(${greendots})`,
      height: "100vh",
      position: "absolute",
      display: "flex",
      justifyContent: "center"
    }}
    >
        <Card
          sx={{
            width: "350px",
            height: "400px",
            padding: "40px",
            borderRadius: "16px",
            border: 1,
            margin: "75px",
            justifyContent: "center",
            backgroundColor: "#f6f7c3",
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
              marginLeft: "80px",
              // display: "flex",
            }}
          >
            <Typography variant="h6">
              <strong>{name}</strong>
            </Typography>
            <br />
            <Typography>
              <strong>DOB:</strong>
              {date_of_birth}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {phone}
            </Typography>
            <Typography>
              <strong>Email:</strong> {email}
            </Typography>
            <Typography>
              <strong>Dorm:</strong> {resident_dorm}
            </Typography>
          </CardContent>
        </Card>


    </Container>


  );
}

export default ResidentFullProfile;
