import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~actions';
import { SelectedTool } from '~models/models';
import * as selectors from '~selectors';

export const KeyboardShortcuts = () => {
  const dispatch = useDispatch();
  const selectedTool = useSelector(selectors.getSelectedTool);
  const selectedSprite = useSelector(selectors.getSelectedSprite);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      if (event.altKey && event.code === 'KeyP') {
        dispatch(actions.setSelectedTool(SelectedTool.Select));
      }

      if (event.altKey && event.code === 'KeyR') {
        dispatch(actions.setSelectedTool(SelectedTool.Sprite));
      }

      if (event.altKey && event.code === 'KeyL') {
        dispatch(actions.setSelectedTool(SelectedTool.Light));
      }

      if (event.code === 'Delete') {
        if (selectedTool == SelectedTool.Select && selectedSprite) {
          dispatch(actions.removeSprite(selectedSprite));
        }
      }
    };

    window.addEventListener('keyup', eventListener);

    return () => {
      window.removeEventListener('keyup', eventListener);
    };
  }, [selectedTool, selectedSprite]);

  return null;
};
