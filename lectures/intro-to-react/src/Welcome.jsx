import React from "react"
import "./Welcome.css"
import { useState } from "react";

export function Welcome({name, imgUrl}){
    //state variables go at the top
    const [style,setStyle] = useState("card");
    const [times, setTimes] = useState(0);

    function addOne(ev){
        setTimes(times+1);
        ev.stopPropagation();
    }

    function toggleClass(){
        console.log("change the card class");
        if (style === "card"){
            setStyle("active-card");
        }else{
            setStyle("card");
        }
    }
    
    return (
    <section className={style} onClick={toggleClass}>
        Hello, {name}
        <img src={imgUrl} alt="" />
        <button onClick={addOne} >
            This has been clicked {times} times.
        </button>
    </section>
    );
 }