import React, {useState, useEffect} from 'react';

function UseEffectHook(){

    const[count, setCount] = useState(0);
    const[color, setColor] = useState("green");
    const[width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);


    useEffect(()=> {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    },[]);


    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;

    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    // useEffect(() => {
    //     document.title = `Count ${count} ${color}`;
    //
    //     return () => {
    //         // SOME CLEANUP CODE
    //     }
    // },[count, color])

    function addCount(){
        setCount(c => c + 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    return(<>
        {/*<p style={{color: color}}>Count: {count}</p>*/}
        {/*<button onClick={addCount}>Add</button>*/}
        {/*<button onClick={subtractCount}>Subtract</button><br/>*/}
        {/*<button onClick={changeColor}>Change Color</button>*/}
        <p>Window Width: {width} px</p>
        <p>Window Height: {height} px</p>


    </>);
}

export default UseEffectHook;