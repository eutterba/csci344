import React, { useState, useEffect } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Bookmark({token, bookmarkId, postId}){
    console.log(bookmarkId);
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        console.log("creating a bookmark...");
        const sendData = {
            post_id: postId,
        };
        const responseData = await postDataToServer(token, "/api/bookmarks/", sendData);
        console.log(responseData);
        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        console.log("deleting a bookmark...");
        const url= "/api/bookmarks/"+stateBookmarkId;
        const responseData = await deleteDataFromServer(token, url);
        console.log(responseData);
        setStateBookmarkId(null);
    }

    if (stateBookmarkId){
        return (
            <button 
                aria-label="Remove Bookmark from Post" 
                aria-checked="true" 
                role="toggle" onClick={deleteBookmark}>
                    <i className="fas fa-bookmark"></i>
            </button>
        ) 
    }else{
        return (
            <button 
                aria-label="Add Bookmark to Post" 
                aria-checked="false" 
                role="toggle" onClick={createBookmark}>
                    <i className="far fa-bookmark"></i>
            </button>
        )
    }
}