import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {

    const [suggestions, setSuggestions] = useState([]);
    
        async function getSuggestions() {
            //fetch data from endpoint
            const data = await getDataFromServer(token, "/api/suggestions/");
            console.log(data);
            //set state variable
            setSuggestions(data);
        }
        //built in fucntion designed to handle side effects 
        useEffect(() => {
            getSuggestions();
        }, []);
    
        function outputSuggestion(suggestionObj){
            return <Suggestion token={token} key={suggestionObj.id} suggestionData={suggestionObj} />
        }

    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            {
                suggestions.map(outputSuggestion)
            }

            {/* <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=11" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">amandahudson</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>

            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=12" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">qthornton</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>

            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=13" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">ynelson</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>

            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=14" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">lauralyons</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>

            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=15" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">robertsonkristen</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section> */}
        </div>
    
    );
}
