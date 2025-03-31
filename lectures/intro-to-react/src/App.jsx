import React, { useState, useEffect } from "react";
import Profile from "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";
import { getPosts } from "./data-functions.js";
import { Welcome } from "./Welcome.jsx";

 export default function App() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
         (async function () {
             const posts = await getPosts();
             console.log(posts);
             setPosts(posts);
         })();
     }, []);

     function getProfileComponents() {
         return posts.map((item) => {
             return (
                 <Profile
                     key={item.id}
                     name={item.caption}
                     picture={item.image_url}
                 />
             );
         });
     }

     return (
         <>
             <header>
                 <h1>My First App</h1>
             </header>
             <main>
                 <p>Hello React!</p>
                 <Welcome name={"Eli"} imgUrl={"https://tse2.mm.bing.net/th?id=OIP.EhqVlDb1718OqDfsp0cGkQHaEK&pid=Api"}/>
                 {/* expressions are embedded in curly braces in JSX */}
                 {getProfileComponents()}

                <ButtonCount value={1}/>
                <ButtonCount value={2}/>
                <ButtonCount value={3}/>
                <ButtonCount value={4}/>
                <ButtonCount value={5}/>
                <ButtonCount value={6}/>
             </main>
         </>
     );
 }
