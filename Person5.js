import React from 'react'

function Person5() {
    const persons = {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }

    return (
        <>
             <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person4"> <button id="prev">Previous</button></Link>
            <Link to="/components/person"> <button id="next">Next</button> </Link>
        </>
    )
}


export default Person5
