import React from 'react'

function Person3() {

    const persons = {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    }

    return (
        <>
            <div>
                <img src={persons.avatar} />
            </div>
            <span id="first">{persons.first_name}</span>
            <span id="last">{persons.last_name}</span>
            <div id="email">{persons.email}</div>
            <Link to="/components/person2"> <button id="prev">Previous</button></Link>
            <Link to="/components/person4"> <button id="next">Next</button> </Link>
        </>
    )
}

export default Person3
