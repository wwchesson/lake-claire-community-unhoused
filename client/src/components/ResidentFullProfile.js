import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {Box, Card, CardContent, Avatar, Typography, Button } from "@mui/material"


function ResidentFullProfile() {
    const { id } = useParams();
    const [individualRes, setIndividualRes] = useState([])
    const {name, image, email, date_of_birth, phone, resident_dorm} = individualRes

    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
setIndividualRes(data)

        })
    }, [id])


//hello money poney

    return (
        <div>
 <Card
          sx={{
            width: "400px",
            height: "400px",
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
            <Typography>
                {name}
            </Typography>
            <Typography>
                <strong>DOB:</strong>{date_of_birth}
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
        </div>
    )
}

export default ResidentFullProfile