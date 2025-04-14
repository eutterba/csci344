import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";
//fetch post data from server
//itterate through each element and draws a post component
export default function Posts({ token }) {
    //when useState is invoked it returns a array with 2 values:
    //1. state variable
    //2. function whose job is to set the state variable and
    //then redraw the screen after setting it
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    async function getPosts() {
        //fetch data from endpoint
        const data = await getDataFromServer(token, "/api/posts");
        console.log(data);
        //set state variable
        setPosts(data);
    }
    //built in fucntion designed to handle side effects 
    useEffect(() => {
        getPosts();
    }, []);

    function addOneToCount(){
        setCount(count+1);
    }
    console.log("redraw screen with counter",count);
    function outputPost(postObj){
        return <Post token={token} key={postObj.id} postData={postObj} />
    }

    return (
    <div>TODO: output all of the posts: {posts.length}
        {
            posts.map(outputPost)
        }
        <br />
        <button onClick={addOneToCount}>
            {count}
        </button>
    </div>
    )
}
