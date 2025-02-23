import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '~actions';
import { SelectedTool } from '~models/models';

export const KeyboardShortcuts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.altKey && event.code === 'KeyP') {
        dispatch(actions.setSelectedTool(SelectedTool.Select));
      }

      if (event.altKey && event.code === 'KeyR') {
        dispatch(actions.setSelectedTool(SelectedTool.Sprite));
      }

      if (event.altKey && event.code === 'KeyL') {
        dispatch(actions.setSelectedTool(SelectedTool.Light));
      }
    });
  }, []);

  return null;
};
