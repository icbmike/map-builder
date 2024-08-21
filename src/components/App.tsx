import React from "react"
import { Header } from './Header';
import { Canvas } from './Canvas/Canvas';

import "./App.scss"
import { Toolbar } from './Toolbar';
import { store } from '../redux/store';
import { Provider } from "react-redux";

export const App = () => {

    return <Provider store={store}>
        <div className="app">
            <Header />

            <div className="toolbarAndCanvas">
                <Toolbar />
                <div className="canvasContainer">
                    <Canvas />
                </div>
            </div>
        </div>
    </Provider>
}