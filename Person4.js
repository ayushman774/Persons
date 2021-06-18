import React from 'react'

function Person4() {
    const persons = {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    }

    return (
        <>
            <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person3"> <button id="prev">Previous</button></Link>
            <Link to="/components/person5"> <button id="next">Next</button> </Link>
        </>
    )
}

export default Person4
