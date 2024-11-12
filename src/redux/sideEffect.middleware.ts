import { Middleware, PayloadAction, PayloadActionCreator, UnknownAction } from "@reduxjs/toolkit";
import { TState } from "./store";

import * as sideEffects from "~sideEffects";

export const sideEffectMiddleWare: Middleware<{}, TState> = (api) => (next) => (action) => { 
    Object.values(sideEffects).forEach(se => {
        const {actionCreator, handler} = se;

        if(actionCreator.match(action)) {
            handler(action)
                .then(newAction => api.dispatch(newAction));
        }
    })

    next(action);
}