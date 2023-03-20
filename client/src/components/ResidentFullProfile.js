import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"


function ResidentFullProfile() {
    const { id } = useParams();
    const [individualRes, setIndividualRes] = useState([])
    const {name, email, date_of_birth} = individualRes

    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
setIndividualRes(data)

        })
    }, [])

    return (
        <div>
            <h4>{name}</h4>
        </div>
    )
}

export default ResidentFullProfile