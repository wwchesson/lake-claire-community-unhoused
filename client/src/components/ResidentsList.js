import React, {useEffect, useState} from "react";
import { Tiles, H3 } from "./StyleElements";
import {Container, Grid, Typography } from "@mui/material"

import Resident from "./ResidentCard";
import ResActivities from "./ResActivities";

function ResidentsList({residents, onActClick, showActivities}) {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch("/activities")
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      setActivity(data)
    })
  }, [])



  return (
    <div className="residents">
      <Typography
      variant="h3"
        sx={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "fantasy"
        }}
      >
        <strong>
          Our Residents
        </strong>
      </Typography>


      <Container >
        <Grid container spacing={2} justifyContent="center">
       {residents.map((resident) => (
          <Resident
            key={resident.id}
            resident={resident}
            // activity={resident.res_activities}
            onActClick={onActClick}
            showActivities={showActivities}
            // act={activity.filter((act) => act.resident_id === resident.id)}
          />


        ))}
        </Grid>

      </Container>



    </div>
  );
}

export default ResidentsList;
