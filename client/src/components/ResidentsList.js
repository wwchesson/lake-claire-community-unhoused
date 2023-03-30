import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";

import ResidentCard from "./ResidentCard";

function ResidentsList({ residents, onActClick, showActivities }) {
  return (
    <div className="residents">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "fantasy",
        }}
      >
        <strong>Our Residents</strong>
      </Typography>

      <Container>
        <Grid container spacing={2} justifyContent="center">
          {residents.map((resident) => (
            <ResidentCard
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
