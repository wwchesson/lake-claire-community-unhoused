import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ResidentIntake({onAddResident}) {
    const navigate = useNavigate();

    const [intakeFormData, setIntakeFormData] = useState({
      name: "",
      date_of_birth: "",
      phone: "",
      email: "",
      counselor_id: "",
      dorm_id: ""
    })

  function handleIntakeInputChange(event) {
    setIntakeFormData({ ...intakeFormData, [event.target.name]: event.target.value });
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
          dorm_id: ""
        });
        navigate("/residents");
      });
  }

  return (
    <div className="submit-form">
      <form className="resident-form" onSubmit={handleIntakeSubmit}>
        <h3 className="add-resident">
          <strong>Resident Intake Form</strong>
        </h3>
        <input
          type="text"
          name="name"
          value={intakeFormData.name}
          onChange={handleIntakeInputChange}
          placeholder="Enter resident's name"
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="date_of_birth"
          value={intakeFormData.date_of_birth}
          onChange={handleIntakeInputChange}
          placeholder="Date of birth"
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="phone"
          value={intakeFormData.phone}
          onChange={handleIntakeInputChange}
          placeholder="Phone"
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="email"
          value={intakeFormData.email}
          onChange={handleIntakeInputChange}
          placeholder="Email address"
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="counselor_id"
          value={intakeFormData.counselor_id}
          onChange={handleIntakeInputChange}
          placeholder="Counselor ID"
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="dorm_id"
          value={intakeFormData.dorm_id}
          onChange={handleIntakeInputChange}
          placeholder="Dorm ID"
          className="input-text"
        ></input>
        <br />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="btn"
        ></input>
      </form>
    </div>
  );
}

export default ResidentIntake;