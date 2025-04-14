import React from "react";

export default function Story({ storyData}) {
    console.log(storyData)
    return (
        <div className="flex flex-col justify-center items-center">
                <img src={storyData.user.image_url} alt="{storyData.user.username}'s profile pic" className="rounded-full border-4 border-gray-300" />
                <p className="text-xs text-gray-500">
                    {storyData.user.username}
                </p>
        </div>
    )

}