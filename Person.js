import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Person() {

    const [next, setNext] = useState({})
    const persons = {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }
    return (
        <>
            <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person5"> <button id="prev">Previous</button></Link>
            <Link to="/components/person1"> <button id="next">Next</button> </Link>
        </>
    )
}

export default Person
