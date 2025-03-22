import React, { useState } from "react";

export default function ButtonCount({value}) {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(value);


    function addOne() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(value);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}