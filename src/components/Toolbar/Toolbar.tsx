import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faImage } from "@fortawesome/free-solid-svg-icons"

import "./Toolbar.scss"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "~actions";
import * as selectors from "~selectors";
import { Accordion, AccordionItem } from '../Accordion';

export const Toolbar = () => {
    const dispatch = useDispatch();
    const selectedTool = useSelector(selectors.getSelectedTool);

    return <div className="toolbar">
        <h2 className="tools_title">Tools</h2>
            <Accordion selectedItem={selectedTool} onItemOpened={name => dispatch(actions.setSelectedTool(name))}>
                <AccordionItem 
                    name="select" 
                    displayText={
                    <>
                        <span className="tool-name">Select Tool</span>
                        <FontAwesomeIcon icon={faArrowPointer} />
                    </>
                    }
                />
                
                <AccordionItem 
                    name="sprite" 
                    displayText={
                    <>
                        <span className="tool-name">Sprite Tool</span>
                        <FontAwesomeIcon icon={faImage} />
                    </>
                }>
                    sprites and stuff
                </AccordionItem>
            </Accordion>
    </div>
}