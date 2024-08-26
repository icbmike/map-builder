import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "~actions";

export const KeyboardShortcuts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keyup', (event: KeyboardEvent) => {
            if(event.altKey && event.code === 'KeyP') {
                dispatch(actions.setSelectedTool('select'))
            }
    
            if(event.altKey && event.code === 'KeyR') {
                dispatch(actions.setSelectedTool('sprite'))
            }
        });
    }, [])

    return null;
}