import React from "react"
import { Header } from './Header';
import { Canvas } from './Canvas/Canvas';

import "./App.scss"
import { Toolbar } from './Toolbar';

export const App = () => {
    return <div className="app">
        <Header />

        <div className="toolbarAndCanvas">
            <Toolbar />
            <div className="canvasContainer">
                <Canvas />
            </div>
        </div>
    </div>
}