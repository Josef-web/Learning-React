import ComponentD from "./ComponentD.jsx";
import {UserContext} from "./ComponentA.jsx";
import React, {useContext} from "react";

function ComponentC(){

    var user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hi again ${user}`}</h2>
            <ComponentD/>

        </div>
    )
}

export default ComponentC;