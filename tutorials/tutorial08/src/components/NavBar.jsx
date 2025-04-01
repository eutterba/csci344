import React from "react";
import { Collapse } from "antd";

export default function NavBar({ username }) {
    // This component is implemented for you:
    const text = `this is where the navigation to different pages will be`;
    const items = [
        {
            key:'2',
            label: 'Design System Tests',
            children: <p>{text}</p>,
            showArrow: false,
        },
    ];
    const onChange = key => {
        console.console.log(key);
        
    };
    return (
        <nav className="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0 z-10">
            <h1 className="font-Comfortaa font-bold text-2xl">
            Design System Tests
            </h1>
        </nav>
    );
}
