import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tiles, UpdateCard } from "./StyleElements";

function ResidentUpdate({ onUpdateResident, onDeleteResident }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [individualRes, setIndividualRes] = useState([]);

  const [updateFormData, setUpdateFormData] = useState({
    counselor_id: "",
    dorm_id: "",
  });

  useEffect(() => {
    fetch(`/residents/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setIndividualRes(data);
        console.log(data);
      });
  }, [id]);

  function handleUpdateInputChange(event) {
    setUpdateFormData({
      ...updateFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleDeleteClick() {
    fetch(`/residents/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      onDeleteResident(id);
      navigate("/residents");
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/residents/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFormData),
    })
      .then((r) => r.json())
      .then((updatedResident) => {
        onUpdateResident(updatedResident);
        setUpdateFormData({
          counselor_id: "",
          dorm_id: "",
        });
        navigate("/residents");
      });
  }

  return (
    <Tiles>
      <UpdateCard>
        <h4 className="home-text">{individualRes.name}</h4>
        <form onSubmit={handleSubmit}>
          <select
            type="text"
            name="counselor_id"
            value={updateFormData.counselor_id}
            onChange={handleUpdateInputChange}
            placeholder="New counselor's ID"
            className="input-text"
          ></select>
          <br />
          <input
            type="text"
            name="dorm_id"
            value={updateFormData.dorm_id}
            onChange={handleUpdateInputChange}
            placeholder="New dorm ID"
            className="input-text"
          ></input>
          <br />
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="btn"
          ></input>
          <br />
          <button className="btn" onClick={handleDeleteClick}>
            Delete Resident
          </button>
        </form>
      </UpdateCard>
    </Tiles>
  );
}

export default ResidentUpdate;
