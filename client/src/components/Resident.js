import React, { useState, useEffect } from "react";
import { Card } from "./StyleElements";
import { Link } from "react-router-dom";
import ResidentUpdate from "./ResidentUpdate";


function Resident({ resident, onUpdateResident, onDeleteResident }) {
  const { id, name, date_of_birth, phone, email } = resident;

  const [res, setRes] = useState([])

  useEffect(() => {
    fetch(`/residents/${id}`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      setRes(data);
    })
  }, [])
  

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    date_of_birth: "",
    phone: "",
    email: ""
  });

  function handleUpdateInputChange(event) {
    setUpdateFormData({
      ...updateFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleEditClick() {
    setShowUpdateForm((showUpdateForm) => !showUpdateForm);
    setUpdateFormData({
      name: "",
      date_of_birth: "",
      phone: "",
      email: ""
    });
  }

  function handleDeleteClick() {
    fetch(`/residents/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        onDeleteResident(id);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/residents/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFormData),
    })
      .then((r) => r.json())
      .then((updatedResident) => {
        onUpdateResident(updatedResident);
        setShowUpdateForm((showUpdateForm) => !showUpdateForm);
      });
  }

  function showDorm() {
    if (res.dorm != null) {
    return <h4>{res.dorm.name}</h4>
    } else {
      return <h4>No dorm</h4>
    }
  }

  function showActivities() {
    if (res.activities != null) {
      return <div>{res.activities.map(act => <h4 key={act.id}>{act.name}</h4>)}</div>
    } else {
      return <h4>No activities</h4>
    }
  }

  return (
    
    <Card>
      {/* <h3><Link to={`/residents/${id}`}>{name}</Link></h3>
      <h5 className="instructions">Click on the link above to see resident's activities</h5>
      <br/> */}
      <h3><strong>{name}</strong></h3>
      <h4>Date of Birth: {date_of_birth}</h4>
      <h4> Phone: {phone}</h4>
      <h4>Email Address: {email}</h4>
      <br />
      <h4>Activities: </h4>{showActivities()}
      <h4>Dorm:</h4>{showDorm()}
      
      
      

      <h4><Link to={`/residents/${id}`}>Click to update resident</Link></h4>
      

      <div>
        <button onClick={handleDeleteClick}>Delete Resident</button>
        <br />
        <button onClick={handleEditClick}>
          {showUpdateForm ? "Hide Update Form" : "Update Resident"}
        </button>
        {showUpdateForm ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={updateFormData.name}
              onChange={handleUpdateInputChange}
              placeholder="Resident's name"
              className="input-update-resident"
            ></input>
            <br />
            <input
              type="text"
              name="SSN"
              value={updateFormData.ssn}
              onChange={handleUpdateInputChange}
              placeholder="SSN"
              className="input-update-resident"
            ></input>
            <br />
            <input
              type="text"
              name="age"
              value={updateFormData.age}
              onChange={handleUpdateInputChange}
              placeholder="Age"
              className="input-update-resident"
            ></input>
            <br />

            <input
              type="text"
              name="email"
              value={updateFormData.email}
              onChange={handleUpdateInputChange}
              placeholder="Email address"
              className="input-update-resident"
            ></input>
            <br />
            <input
              type="text"
              name="needs"
              value={updateFormData.needs}
              onChange={handleUpdateInputChange}
              placeholder="Resident's needs"
              className="input-update-resident"
            ></input>
            <br />
            <input
              type="text"
              name="interests"
              value={updateFormData.interests}
              onChange={handleUpdateInputChange}
              placeholder="Resident's interests"
              className="input-update-resident"
            ></input>
            <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="btn"
            ></input>
          </form>
        ) : null}
      </div>
    </Card>
  );
}

export default Resident;


