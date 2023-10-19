import React, { useEffect, useState } from "react";
import api from "../components/Services/api";

export default function API() {
    
    const [user, setUser] = useState();

    useEffect(() => {

        api
        .get()
        .then((response) => setUser(response)).catch((err) => {
            console.log("Error: ", err);
        })

        

    }, [])

    return (
    <div className="App">
        <p>{user}</p>
    </div>
    );
}