import React, { useEffect, useState } from "react";
import api from "../components/Services/api";
import { useRef } from "react";

export default function API() {
    
    const [user, setUser] = useState();

    useEffect(() => {

        api
        .get('/questions')
        .then((response) => {
            setUser(response.data)
        }).catch((err) => {
            console.log("Error: ", err);
        })

        

    }, [0])

    console.log(user)

    return (
    <div className="App">
        {user ? (
          <p>{user[0].question}</p>
        ) : (
          <p>Loading...</p>
        )}
        {/* Resto do seu código */}
    </div>
    );
}