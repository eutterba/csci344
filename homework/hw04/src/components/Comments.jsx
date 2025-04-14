import React, { useState, useEffect } from "react";
import Comment from "./Comment";

export default function Comments({ Data }) {
    
    function lastComment(Data){
        const size= Data.length;
        const last= Data[size-1];
        console.log(last)
        if(size===0){
            <p>
                
            </p>
        }else{
            return (
                <div>
                    <button>
                        View all {size} comments.
                    </button>
                    <Comment key={Data[size-1].id} commentData={last} />
                </div>
            )  
        }
    }
    // function outputComment(Data){

    //     return <Comment key={Data.id} commentData={Data} />
    // }

    return(
        <div>
        {lastComment(Data)}
        </div>
        //Data.map(outputComment)
    )

}