import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profile, setProfile] = useState(null);

    async function getProfile() {
        //fetch data from endpoint
        const data = await getDataFromServer(token, "/api/profile");
        console.log(data);
        //set state variable
        setProfile(data);
    }

    useEffect(() => {
        getProfile();
    },[]);

    if (!profile) return <div>Loading profile...</div>;

    return (
        <header className="flex gap-4 items-center">
            <img src={profile.image_url} className="rounded-full w-16" />
            <h2 className="font-Comfortaa font-bold text-2xl">
                {profile.username}
            </h2>
        </header>
        
    );
}
