import React from 'react'

function Person2() {
    const persons = {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    }

    return (
        <>
             <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person1"> <button id="prev">Previous</button></Link>
            <Link to="/components/person3"> <button id="next">Next</button> </Link>
        </>
    )
}


export default Person2
