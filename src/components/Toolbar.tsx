import React from "react"

import "./Toolbar.scss"

export const Toolbar = () => {
    return <div className="toolbar">
        <h2 className="tools_title">Tools</h2>
        <ul className="tools">
            <li className="tool">Select Tool</li>
            <li className="tool">Stamp Tool</li>
        </ul>
    </div>
}