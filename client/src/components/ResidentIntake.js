import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";

function ResidentIntake({ onAddResident }) {
  const navigate = useNavigate();

  const [intakeFormData, setIntakeFormData] = useState({
    name: "",
    date_of_birth: "",
    phone: "",
    email: "",
    counselor_id: "",
    dorm_id: "",
  });

  function handleIntakeInputChange(event) {
    setIntakeFormData({
      ...intakeFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleIntakeSubmit(event) {
    event.preventDefault();
    fetch("/residents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(intakeFormData),
    })
      .then((r) => r.json())
      .then((newResident) => {
        onAddResident(newResident);
        setIntakeFormData({
          name: "",
          date_of_birth: "",
          phone: "",
          email: "",
          counselor_id: "",
          dorm_id: "",
        });
        navigate("/residents");
      });
  }

  return (
    <div className="submit-form">
      <form className="resident-form" onSubmit={handleIntakeSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            margin: "auto",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "10px",
            textAlign: "center",
            cursor: "pointer",
            width: "300px",
            height: "650px",
            border: 12,
            borderRadius: 16,
            borderColor: "green",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h5"
            sx={{
              marginTop: "20px",
              fontFamily: "fantasy",
            }}
          >
            <strong>Resident Intake Form</strong>
          </Typography>
          <TextField
            label="Resident's Name"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.name}
            onChange={handleIntakeInputChange}
          ></TextField>
          <TextField
            label="Date of Birth"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.date_of_birth}
            onChange={handleIntakeInputChange}
          ></TextField>
          <TextField
            label="Phone"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.phone}
            onChange={handleIntakeInputChange}
          ></TextField>
          <TextField
            label="Email"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.email}
            onChange={handleIntakeInputChange}
          ></TextField>
                    <TextField
            label="Counselor"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.counselor_id}
            onChange={handleIntakeInputChange}
          ></TextField>
                    <TextField
            label="Dorm"
            type="text"
            variant="outlined"
            autoComplete="off"
            value={intakeFormData.dorm_id}
            onChange={handleIntakeInputChange}
          ></TextField>
        <Button
          sx={{
            display: "flex",
            border: 1,
            borderColor: "white",
            cursor: "pointer",
            margin: "auto",
            marginTop: "20px",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "end",
            position: "relative",
          }}
          type="submit"
        >
          <Typography variant="h5" color="white">
            <strong>Submit</strong>
          </Typography>
        </Button>
        </Box>

      </form>
    </div>
  );
}

export default ResidentIntake;
