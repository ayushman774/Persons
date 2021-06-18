import React from 'react'

function Person1() {

    const persons = {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }

    return (
        <>
              <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person"> <button id="prev">Previous</button></Link>
            <Link to="/components/person2"> <button id="next">Next</button> </Link>
        </>
    )
}

export default Person1
