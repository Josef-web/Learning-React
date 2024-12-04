import ComponentB from "./ComponentB.jsx";
import React, {useState, createContext} from "react";

// Use useContext() hook for avoid from prop drilling
export const UserContext = createContext();


function ComponentA(){

    const [user, setUser] = useState("Josef");

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>



        </div>
    )
}

export default ComponentA;