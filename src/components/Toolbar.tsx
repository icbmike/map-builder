import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faImage } from "@fortawesome/free-solid-svg-icons"

import "./Toolbar.scss"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "~actions";
import * as selectors from "~selectors";

export const Toolbar = () => {
    const dispatch = useDispatch();
    const selectedTool = useSelector(selectors.getSelectedTool);

    return <div className="toolbar">
        <h2 className="tools_title">Tools</h2>
        <ul className="tools">
            <li className={`tool ${selectedTool === 'select' ? 'is-selected' : ''}`} 
                onClick={() => dispatch(actions.setSelectedTool('select'))}
            >
                <span className="tool-name">Select Tool</span>
                <FontAwesomeIcon icon={faArrowPointer} />
            </li>
            <li className={`tool ${selectedTool === 'sprite' ? 'is-selected' : ''}`}
                onClick={() => dispatch(actions.setSelectedTool('sprite'))}
            >
                <span className="tool-name">Sprite Tool</span>
                <FontAwesomeIcon icon={faImage} />
            </li>
        </ul>
    </div>
}