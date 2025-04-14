import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Story from "./Story";

export default function Stories({ token }) {

    const [stories, setStories] = useState([]);

    async function getStories() {
        //fetch data from endpoint
        const data = await getDataFromServer(token, "/api/stories/");
        console.log(data);
        //set state variable
        setStories(data);
    }
    //built in fucntion designed to handle side effects 
    useEffect(() => {
        getStories();
    }, []);

    function outputStory(storyObj){
        return <Story token={token} key={storyObj.id} storyData={storyObj} />
    }

    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {
                stories.map(outputStory)
            }
            
            {/* <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=10" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">gouldjennifer</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=11" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">matthew16</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=12" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">sanchezjill</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=13" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">gloria62</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=14" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">jwright</p>
            </div> */}
        </header>
        // <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
        //     Stories go here. Fetch data from /api/stories
        // </header>
    );
}
