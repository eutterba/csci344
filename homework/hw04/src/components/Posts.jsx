import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Posts({ token }) {
    //when useState is invoked it returns a array with 2 values:
    //1. state variable
    //2. function whose job is to set the state variable and
    //then redraw the screen after setting it
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        console.log(data);
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    function addOneToCount(){
        setCount(count+1);
    }
    console.log("redraw screen with counter",count);

    return (
    <div>TODO: output all of the posts: {posts.length}
        {
            posts.map(post => (
                <section className="bg-white border mb-10">
                    <div className="p-4 flex justify-between">
                        <h3 className="text-lg font-Comfortaa font-bold">
                            gibsonjack
                        </h3>
                        <button className="icon-button">
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    <img src="https://picsum.photos/300/200?q=1" alt="placeholder image" width="300" height="300"
                    className="w-full bg-cover" />
                    <div className="p-4">
                        <div className="flex justify-between text-2xl mb-3">
                            <div>
                                <button>
                                    <i className="far fa-heart"></i>
                                </button>
                                <button>
                                    <i className="far fa-comment"></i>
                                </button>
                                <button>
                                    <i className="far fa-paper-plane"></i>
                                </button>
                            </div>
                            <div>
                                <button>
                                    <i className="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                        <p className="font-bold mb-3">
                            30 likes
                        </p>
                        <div className="text-sm mb-3">
                            <p>
                                <strong>
                                    gibsonjack
                                </strong>
                                Here is a caption about the photo.
                                Text text text text text text text text text
                                text text text text text text text text... <button class="button">more</button>
                            </p>
                        </div>
                        <p className="text-sm mb-3">
                            <strong>
                                lizzie
                            </strong>
                            Here is a comment text text text text text text text text.
                        </p>
                        <p className="text-sm mb-3">
                            <strong>
                                vanek97
                            </strong>
                            Here is another comment text text text.
                        </p>
                        <p class="uppercase text-gray-500 text-xs">
                            1 day ago
                        </p>
                    </div>
                    <div class="flex justify-between items-center p-3">
                        <div class="flex items-center gap-3 min-w-[80%]">
                            <i class="far fa-smile text-lg"></i>
                                <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                                </input>
                        </div>
                        <button class="text-blue-500 py-2">Post</button>
                    </div>
                </section>
            ))
        }
        <br />
        <button onClick={addOneToCount}>
            {count}
        </button>
    </div>
    )
}
