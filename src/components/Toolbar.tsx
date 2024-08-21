import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faImage } from "@fortawesome/free-solid-svg-icons"

import "./Toolbar.scss"

type SelectedTool = 'select' | 'sprite';

export const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<SelectedTool | undefined>();

    return <div className="toolbar">
        <h2 className="tools_title">Tools</h2>
        <ul className="tools">
            <li className={`tool ${selectedTool === 'select' ? 'is-selected' : ''}`} onClick={() => setSelectedTool('select')}>
                <span className="tool-name">Select Tool</span>
                <FontAwesomeIcon icon={faArrowPointer} />
            </li>
            <li className={`tool ${selectedTool === 'sprite' ? 'is-selected' : ''}`}  onClick={() => setSelectedTool('sprite')}>
                <span className="tool-name">Sprite Tool</span>
                <FontAwesomeIcon icon={faImage} />
            </li>
        </ul>
    </div>
}