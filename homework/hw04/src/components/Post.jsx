import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import Bookmark from "./Bookmark";
import Like from "./Like";
//create a tasteful representation of the post using data from parent
export default function Post({postData, token}){
    console.log(postData);
    return (
        <section className="bg-white border mb-10">
            <div className="p-4 flex justify-between">
                <h3 className="text-lg font-Comfortaa font-bold">
                        {postData.user.username}
                </h3>
                <button className="icon-button">
                    <i className="fas fa-ellipsis-h"></i> 
               </button>
            </div>
                <img src={postData.image_url} alt={postData.alt_text || "Post Photo"} width="300" height="300"
                    className="w-full bg-cover" />
            <div className="p-4">
                <div className="flex justify-between text-2xl mb-3">
                    <div className="flex gap-2">
                        <Like token={token} likeId={postData.current_user_like_id} postId={postData.id} />
                        <button>
                            <i className="far fa-comment"></i>
                        </button>
                        <button>
                            <i className="far fa-paper-plane"></i>
                        </button>
                    </div>
                    <div>
                        <Bookmark token={token} bookmarkId={postData.current_user_bookmark_id} postId={postData.id} />
                    </div>
                </div>
                <p className="font-bold mb-3">
                    {postData.likes.length} likes
                </p>
                <div className="text-sm mb-3">
                    <p className="flex gap-2">                            
                        <strong>
                            {postData.user.username}
                        </strong>
                        {postData.caption} 
                        <button>
                            more
                        </button>
                    </p>
                </div>
                <Comments Data={postData.comments}/>
                <p className="uppercase text-gray-500 text-xs">
                    {postData.display_time}
                </p> 
            </div>
            {/* <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                        <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                        </input>
                </div>
                <button class="text-blue-500 py-2">
                    Post
                </button>
            </div> */}
        </section>

    )
}