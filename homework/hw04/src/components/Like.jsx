import React, { useState, useEffect } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({token, likeId, postId}){
    console.log(likeId);
    const [stateLikeId, setStateLikeId] = useState(likeId);

    async function createLike() {
            console.log("creating a like...");
            const sendData = {
                post_id: postId,
            };
            const responseData = await postDataToServer(token, "/api/likes/", sendData);
            console.log(responseData);
            setStateLikeId(responseData.id);
        }
    
        async function deleteLike() {
            console.log("deleting a like...");
            const url= "/api/likes/"+stateLikeId;
            const responseData = await deleteDataFromServer(token, url);
            console.log(responseData);
            setStateLikeId(null);
        }

    if (stateLikeId){
        return (
            <button 
                aria-label="Remove Like from Post" 
                aria-checked="true" 
                role="toggle" onClick={deleteLike}>
                <i className="fas fa-heart text-red-700"></i>
            </button>
        )  
    } else{
        return (
            <button 
                aria-label="Add Like to Post" 
                aria-checked="false" 
                role="toggle" onClick={createLike}>
                <i className="far fa-heart"></i>
            </button>
        )
    }
}