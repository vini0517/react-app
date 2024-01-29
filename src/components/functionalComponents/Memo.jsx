import React, { useMemo, useState } from "react";

const Memo = () =>{
    const [number, updateNumber] = useState(0);
    const list = [10,20]
    const [dark,updateTheme] = useState(false)
    const doubleNumber = useMemo(() =>{
        return doubleNumberSlow(number)
    },[number])
    const theme = useMemo(()=>{
        return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
        }
    },[dark])
    function doubleNumberSlow(num){
        console.log("Is it Calling")
        for(let i = 0;i<100000;i++){}
        return num * 2;
    }
    
    return(
        <div>
            <h1>This is a Dangerous Hook which is called useMemo</h1>
            <input type="number" value={number} onChange={(event) => updateNumber(event.target.value)}/>
            <button onClick={()=>{updateTheme(dark => !dark)}}>Change Theme</button>
            <h2 style={theme}>The doubled Number is {doubleNumber}</h2>
            <ol>
        {list.map((val,index)=>(
            <li key={index}>{val}</li>
        ))}
      </ol>
        </div>
    )
}
export default Memo;