import React from "react"
import { Toolbar } from './Toolbar';
import { Canvas } from './Canvas';

import "./App.scss"

export const App = () => {
    return <div className="app">
        <Toolbar />
        <div className="canvasContainer">
            <Canvas />
        </div>
    </div>
}