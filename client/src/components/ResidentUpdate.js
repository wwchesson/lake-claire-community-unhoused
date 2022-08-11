import React, {useState} from "react";
import {useParams} from "react-router-dom"

function ResidentUpdate({onUpdateResident, onDeleteResident}) {
    const {id} = useParams();

  const [updateFormData, setUpdateFormData] = useState({
    counselor_id: "",
    dorm_id: "",

  });

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
    })
      .then(() => {
        onDeleteResident(id);
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
      });
  }

    return (
      <div>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="counselor_update"
            value={updateFormData.counselor_id}
            onChange={handleUpdateInputChange}
            placeholder="New counselor's ID"
            className="input-update-resident"
          ></input>
          <br />
          <input
            type="text"
            name="dorm_update"
            value={updateFormData.dorm_id}
            onChange={handleUpdateInputChange}
            placeholder="New dorm ID"
            className="input-update-resident"
          ></input>
          <br />
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="btn"
          ></input>
          <br />
          <button onClick={handleDeleteClick}>Delete Resident</button>
        </form>
    </div>
    )
}

export default ResidentUpdate;