import { useEffect, useState } from "react"

/*
import React, { useState } from "react";

const About = () => {
    const [college, updateCollege] = useState("KEC");

    const updatingClg = () => {
        console.log("Hello");
        updateCollege("Kongu Engineering College");
    };

    return (
        <div>
            <h1>Welcome to {college}</h1>
            <button onDoubleClick={updatingClg}>Update College Name.</button>
        </div>
    );
};

export default About;
*/
const About = () =>{
    const [tabname,setName] =useState("Dont take any pills if you are healthy")
    const updatingName = ()=>{
        setName("Welcome to cold club ,take this tablet citicin and cure it")
    }
    const updatingName1 = ()=>{
        setName("Welcome to fever club ,take this tablet paracetomel and cure it")
    }
    const updatingName2 = ()=>{
        setName("Welcome to seizure club ,take this tablet levipill continuously to contol seizures")
    }
    console.log("Tablet name")
    useEffect(()=>{
        console.log("Side effects are sleepy,drowsiness")
    },[tabname])
    return(
        <div>
            <h1> {tabname}</h1>
            <button onClick={updatingName}>Cold</button>
            <button onClick={updatingName1}>Fever</button>
            <button onClick={updatingName2}>Epilepsy</button>
        </div>
    )
}
export default About
