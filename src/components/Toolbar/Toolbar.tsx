import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowPointer,
  faImage,
  faLightbulb,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import './Toolbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~actions';
import * as selectors from '~selectors';
import { Accordion, AccordionItem } from '../Accordion';
import { SpriteList } from '../SpriteList/SpriteList';
import { SelectedTool } from '~models/models';
import { LightTool } from '~components/LightTool/LightTool';
import { CanvasSettings } from '~components/CanvasSettings/CanvasSettings';

export const Toolbar = () => {
  const dispatch = useDispatch();
  const selectedTool = useSelector(selectors.getSelectedTool);

  return (
    <div className="toolbar">
      <h2 className="tools_title">Tools</h2>
      <Accordion
        selectedItem={selectedTool}
        onItemOpened={(name: string) =>
          dispatch(actions.setSelectedTool(name as SelectedTool))
        }
      >
        <AccordionItem name="canvasSettings" displayText={
          <>
            <span className='tool-name'>Canvas Settings</span>
            <FontAwesomeIcon icon={faCog}/>
          </>
        }>
          <CanvasSettings />
        </AccordionItem>
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
          }
        >
          <SpriteList />
        </AccordionItem>
        <AccordionItem
          name="light"
          displayText={
            <>
              <span className="tool-name">Light Tool</span>
              <FontAwesomeIcon icon={faLightbulb} />
            </>
          }
        >
          <LightTool />
        </AccordionItem>
      </Accordion>
    </div>
  );
};
