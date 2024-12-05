import React, { useEffect, useState, useRef } from "react";
import button from "./Button/Button.jsx";


function UseRefHook() {

    //let [number, setNumber] = useState(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        // console.log(inputRef);
    });

    function handleClick1() {
        // setNumber(n => n + 1);
        // inputRef1.current++;
        // console.log(inputRef.current)

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }
    function handleClick2() {

        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "red";
        inputRef3.current.style.backgroundColor = "";

    }
    function handleClick3() {

        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "red";

    }

    return (
        <div>
            <div>
                <button onClick={handleClick1}>
                    Click me 1!
                </button>
                <input ref={inputRef1}/>
            </div>
            <br/>
            <div>
                <button onClick={handleClick2}>
                    Click me 2!
                </button>
                <input ref={inputRef2}/>
            </div>
            <br/>

            <div>
                <button onClick={handleClick3}>
                    Click me 3!
                </button>
                <input ref={inputRef3}/>
            </div>
        </div>

    )
}

export default UseRefHook;