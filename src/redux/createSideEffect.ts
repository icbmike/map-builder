import { PayloadActionCreator, PayloadAction, UnknownAction } from "@reduxjs/toolkit"

export interface SideEffect<TPayload> {
    actionCreator: PayloadActionCreator<TPayload>,
    handler: (action: PayloadAction<TPayload>) => Promise<UnknownAction>
}

export const createSideEffect = <TPayload>(
    action: PayloadActionCreator<TPayload>, 
    sideEffect: (action: PayloadAction<TPayload>) => Promise<UnknownAction>
): SideEffect<TPayload> => {
    return {
        actionCreator: action,
        handler: sideEffect
    }
}