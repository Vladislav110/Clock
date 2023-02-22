import React from 'react';
import './App.css';
import {Clock} from "./UseEffect_clock";

function App() {
    return (
        <div className="App">
            <Clock mode={"analog"}/>
            <Clock mode={"digital"}/>
        </div>
    );
}

export default App;
