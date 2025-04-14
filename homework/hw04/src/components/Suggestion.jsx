import React from "react";

export default function Suggestion({ suggestionData}) {
    console.log(suggestionData)
    return (
        <section className="flex justify-between items-center mb-4 gap-2">
            <img src={suggestionData.image_url} alt="{suggestionData.username}'s Profile pic" className="rounded-full w-16 object-cover" />
            <div className="w-[180px]">
                <p className="font-bold text-sm">
                    {suggestionData.username}
                </p>
                <p className="text-gray-500 text-xs">
                    suggested for you
                </p>
           </div>
            <button className="text-blue-500 text-sm py-2">
                follow
            </button>
        </section>
    )

}