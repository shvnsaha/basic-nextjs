"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [counter,setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;